const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

const easterText = [
  "Hello World",
  "Easter Egg",
  "Trans Rights are Human Rights",
  "Welcome User",
];
const easterTextLegends = [
  "Welcome Skinbag",
  "Mozambique Here",
  "Black Market Here",
  "Fence Them In, Fence Them Out",
  "Time to dig up some gold",
];
isElementLoaded("#customText").then((selector) => {
  let customText = document.getElementById("customText");
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  // if randomNumber is 1 will it show the easter egg text
  if (randomNumber == 1) {
    let easterTextItem = easterText[Math.floor(Math.random() * easterText.length)];
    console.log("Easter number is active");
    customText.innerHTML = easterTextItem;
    if (easterTextItem === easterText[2]) {
      let customImg = document.getElementById("customImg");
      customImg.src = "/_h5ai/public/images/ui/transFlag.jpg";
    }
  } else if (randomNumber == 100) {
    let easterTextItem = easterTextLegends[Math.floor(Math.random() * easterTextLegends.length)];
    console.log("Easter number is active");
    customText.innerHTML = easterTextItem;
  } else {
    console.log("Random number is: " + randomNumber);
  }
});
