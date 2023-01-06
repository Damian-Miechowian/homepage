console.log("Witam sedecznie wszystkich developerów!");

let button = document.querySelector(".js-button");
let secondButton = document.querySelector(".js-secondButton");

let body = document.querySelector(".body");
let nameTheme = document.querySelector(".js-button__nameTheme");

let header = document.querySelector(".js-header");
// let secondHeadline = document.querySelector(".js-secondHeadline");
// // console.log(".button");
// console.log(".button__secondButton");


button.addEventListener("click", () => {
    header.classList.toggle("headline__secondHeadline");
});

secondButton.addEventListener("click", () => {
    body.classList.toggle("body--grey");
    nameTheme.innerText = body.classList.contains("body--grey") ? "jasny" : "ciemny";
});


