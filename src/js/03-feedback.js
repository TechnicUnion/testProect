import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const feedback = { ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };

checksLocalStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput(evt) {
  feedback[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (emailRef.value && messageRef.value) {
    evt.currentTarget.reset();
    console.log(feedback);
    localStorage.removeItem(STORAGE_KEY);
    delete feedback.email;
    delete feedback.message;
  }
}

function checksLocalStorage() {
  if (feedback) {
    for (const key in feedback) {
      if (key === emailRef.name) {
        emailRef.value = feedback[key];
      } else if (key === messageRef.name) {
        messageRef.value = feedback[key];
      }
    }
  }
}
