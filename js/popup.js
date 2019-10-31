var popupOpen = document.querySelector(".contacts .button");
var popupClose = document.querySelector(".modal-close-button");
var popup = document.querySelector(".modal-feedback");
var user = document.querySelector(".feedback-input-username");

popupOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    user.focus();
})

popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});