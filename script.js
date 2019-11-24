var random = Math.floor(Math.random() * 4);
const homebackground = document.querySelector(".main .homebackground");
console.log(random);

// if (random === 0) {
//     homebackground.src = "images/backgrounds/home/timelapse.gif";
// } else if (random === 1) {
//     homebackground.src = "images/backgrounds/home/timelapse2.gif";
// } else if (random === 2) {
//     homebackground.src = "images/backgrounds/home/tokyo.gif"
// } else if (random === 3) {
//     homebackground.src = "images/backgrounds/home/tokyo2.gif"
// }


window.addEventListener("scroll", () => {
    const background = document.querySelector(".main .background");
    const titleh1 = document.querySelector(".main h1");
    var scroll = window.pageYOffset;
    var titleMove = scroll * .55;
    var backgroundMove = scroll * .7;

    titleh1.style.transform = `translate3d(0, ${titleMove}px, 0)`;
    titleh1.style.opacity = `${100 - titleMove * .4}%`;

    console.log(scroll);

    background.style.transform = `translate3d(0, ${backgroundMove}px, 0)`;
});
