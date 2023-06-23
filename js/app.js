import Plyr from "plyr";
import { animation } from "./modules/animation";

const videos = document.querySelectorAll('.player');

videos.forEach(video => {
    const plyrPlayer = new Plyr(video);
})

animation(0)
window.onscroll = () => {
    animation(window.scrollY)
}