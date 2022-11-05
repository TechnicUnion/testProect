import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

try {
  const startTime = localStorage.getItem('videoplayer-current-time');
  if (startTime) {
    player.setCurrentTime(startTime);
  }
} catch (e) {
  player.setCurrentTime(0);
}
