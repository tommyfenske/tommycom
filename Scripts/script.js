var htmlEl = document.documentElement;
var starEl = document.getElementById("page-head-star");
var chance = Math.floor(Math.random() * 100);
console.log(chance);

if (chance == 0) {
    htmlEl.style.backgroundImage = "url(Assets/background-alt.gif)";
    starEl.src = "Assets/star-alt.gif";
} else {
    htmlEl.style.backgroundImage = "url(Assets/background.gif)";
    starEl.src = "Assets/star.gif";
}