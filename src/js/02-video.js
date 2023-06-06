import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

player.on('timeupdate', throttle(function (evt) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt.seconds));

}, 1000));
let videoTime = localStorage.getItem(STORAGE_KEY);

if (videoTime) {
    player.setCurrentTime(JSON.parse(videoTime));
};
player.setCurrentTime()
    .then(function (seconds) { })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
