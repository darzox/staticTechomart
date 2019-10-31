var mapOpen = document.querySelector(".contacts img");
var map = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close-button");

mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map.classList.contains("modal-show")) {
            map.classList.remove("modal-show");
        }
    }
});