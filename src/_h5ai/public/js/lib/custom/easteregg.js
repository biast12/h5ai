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
  const customText = document.getElementById("customText");
  const customImg = document.getElementById("customImg");
  const randomChance = Math.floor(Math.random() * 100) + 1;

  // Check if the randomChance is 1 to show the easter egg text
  if (randomChance === 1) {
    const easterTextItem = easterText[Math.floor(Math.random() * easterText.length)];
    console.log("Easter number is active");
    customText.innerHTML = easterTextItem;
    if (easterTextItem === easterText[2]) {
      customImg.src = "/_h5ai/public/images/ui/transFlag.jpg";
    }
  } else if (randomChance === easterTextLegends.length) {
    const easterTextItem = easterTextLegends[Math.floor(Math.random() * easterTextLegends.length)];
    console.log("Easter number is active");
    customText.innerHTML = easterTextItem;
  } else {
    console.log("Random chance is: " + randomChance);
  }
});
