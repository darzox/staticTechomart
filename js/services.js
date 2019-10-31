var servicesButtonDelivery = document.querySelector(".services-item:nth-child(1) button");
var servicesButtonGuarantee = document.querySelector(".services-item:nth-child(2) button");
var servicesButtonCredit = document.querySelector(".services-item:nth-child(3) button");
var servicesItemDelivery = document.querySelector(".services-item:nth-child(1)"); 
var servicesItemGuarantee = document.querySelector(".services-item:nth-child(2)");
var servicesItemCredit = document.querySelector(".services-item:nth-child(3)");

var servicesDeliveryPopup = document.querySelector(".services-delivery");
var servicesGuaranteePopup = document.querySelector(".services-guarantee");
var servicesCreditPopup = document.querySelector(".services-credit");

servicesButtonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesItemDelivery.classList.add("services-item-current");
    servicesItemGuarantee.classList.remove("services-item-current");
    servicesItemCredit.classList.remove("services-item-current");

    servicesDeliveryPopup.classList.remove("services-hide");
    servicesGuaranteePopup.classList.add("services-hide");
    servicesCreditPopup.classList.add("services-hide");
});

servicesButtonGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesItemDelivery.classList.remove("services-item-current");
    servicesItemGuarantee.classList.add("services-item-current");
    servicesItemCredit.classList.remove("services-item-current");

    servicesDeliveryPopup.classList.add("services-hide");
    servicesGuaranteePopup.classList.remove("services-hide");
    servicesCreditPopup.classList.add("services-hide");
});

servicesButtonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesItemDelivery.classList.remove("services-item-current");
    servicesItemGuarantee.classList.remove("services-item-current");
    servicesItemCredit.classList.add("services-item-current");

    servicesDeliveryPopup.classList.add("services-hide");
    servicesGuaranteePopup.classList.add("services-hide");
    servicesCreditPopup.classList.remove("services-hide");
});