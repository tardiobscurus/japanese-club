window.addEventListener("scroll", () => {
    const background = document.querySelector(".main .background");
    const titleh1 = document.querySelector(".main h1");
    const arrow = document.querySelector(".main h2");
    var scroll = window.pageYOffset;
    var titleMove = scroll * .7;
    var backgroundMove = scroll * .8;

    titleh1.style.transform = `translate3d(0, ${titleMove}px, 0)`;
    titleh1.style.opacity = `${100 - titleMove * .3}%`;

    console.log(scroll);

    arrow.style.transform = `translate3d(0, ${titleMove / .6}px, 0)`;

    if (scroll >= 190) {
        arrow.style.display = "none";
    } else {
        arrow.style.display = "block";
    }

    background.style.transform = `translate3d(0, ${backgroundMove}px, 0)`;
});