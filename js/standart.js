'use strict';

$(".card__slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
});

const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
    if (getBodyScrollTop() > (header.scrollHeight / 4)) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}