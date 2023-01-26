{
    const welcome = () => {
        console.log("Witam sedecznie wszystkich developerów!");
    }


    const toggleHeadlineColor = () => {
        const header = document.querySelector(".js-header");
        header.classList.toggle("headline__secondHeadline");
    };


    const toggleBackground = () => {
        const body = document.documentElement;
        const nameTheme = document.querySelector(".js-button__nameTheme");

        body.classList.toggle("body--grey");
        nameTheme.innerText = body.classList.contains("body--grey") ? "jasny" : "ciemny";
    };


    const init = () => {
        const button = document.querySelector(".js-button");
        const secondButton = document.querySelector(".js-secondButton");

        button.addEventListener("click", toggleHeadlineColor);
        secondButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
