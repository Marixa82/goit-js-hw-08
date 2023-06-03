import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);
console.log(player);
player.on('timeupdate', throttle(evt => {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt));

}), 1000);
let videoTime = localStorage.getItem(STORAGE_KEY);

if (videoTime) { player.setCurrentTime(JSON.parse(videoTime).seconds); }
