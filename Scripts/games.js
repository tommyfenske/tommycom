var htmlEl = document.documentElement;
var starEl = document.getElementById("page-head-star");
var chance = Math.floor(Math.random() * 5);
console.log(chance);

switch (chance) {
    case 0:
        starEl.src = "Assets/xbox.gif";
        break;
    case 1:
        starEl.src = "Assets/nes.gif";
        break;
    case 2:
        starEl.src = "Assets/playstation.gif";
        break;
    case 3:
        starEl.src = "Assets/computer.gif";
        break;
    case 4:
        starEl.src = "Assets/atari.gif";
        break;
    default:
        starEl.src = "Assets/star.gif";
}