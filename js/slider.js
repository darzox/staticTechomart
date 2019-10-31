var sliderButtonBack = document.querySelector(".slider-button-back");
var sliderButtonForward = document.querySelector(".slider-button-forward");
var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");

sliderButtonBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.toggle("slider-hide");
    sliderSecond.classList.toggle("slider-hide");
});

sliderButtonForward.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.toggle("slider-hide");
    sliderSecond.classList.toggle("slider-hide");
})