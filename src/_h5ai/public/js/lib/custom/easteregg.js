const isElementLoaded = async (selector) => {
    while (document.querySelector(selector) === null) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
};

const easterText = [
    "Hello World",
    "Easter Egg",
    "Welcome User",
    "Trans Rights are Human Rights",
];
isElementLoaded("#customText").then((selector) => {
    let customText = document.getElementById("customText");
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // if randomNumber is 5 or under 5 will it how the easter egg text
    if (randomNumber <= 5) {
        let easterTextItem =
            easterText[Math.floor(Math.random() * easterText.length)];
        console.log("Easter number is active");
        customText.innerHTML = easterTextItem;
    } else {
        console.log("Random number is: " + randomNumber);
    }
});
