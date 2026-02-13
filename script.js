const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const card = document.getElementById("valentineCard");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.style.display = "none";
    card.classList.remove("hidden");
  }, 700);
});

let noScale = 1;
let noClicks = 0;

const begMessages = [
  "Are you sure? 🥺",
  "Sigi na ohhh 😭",
  "fls fls fls ",
  "ay ganon 🥹",
  "ayaw talaga ohhh 💔",
  "ayyyyy"
];

const noMessages = [
  "suree na suree na ayaw ",
  "ayaw ko nga ",
  "nahhhh ",
  "ganonn ",
  "talaga ",
  "blehhh"
];

const yesMessages = [
  "suree na suree ",
  "sigee na nga ",
  "okee ",
  "oke oke ",
  "pag-bigyan na nga ",
  "okii "
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const begText = document.getElementById("begText");

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault
  noClicks++;

  // Shrink the button slightly
  noScale -= 0.12;
  if (noScale < 0.4) noScale = 0.4;
  noBtn.style.transform = `scale(${noScale})`;

  // Move to a random position
  const moveX = Math.random() * 120 - 60;
  const moveY = Math.random() * 80 - 40;
  noBtn.style.transform += ` translate(${moveX}px, ${moveY}px)`;

  // Update begging text
  begText.textContent = begMessages[Math.min(noClicks - 1, begMessages.length - 1)];

  //Update no button
  noBtn.textContent = noMessages[Math.min(noClicks - 1, noMessages.length - 1)];

  //update yes button
  yesBtn.textContent = yesMessages[Math.min(noClicks - 1, yesMessages.length - 1)];

  // Make the No button disappear after 5 clicks
  if (noClicks >= 5) {
    noBtn.style.display = "none";
    begText.textContent = "wala kana choice, blehhh 💖";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <h1>YAY!!! 💖💖💖</h1>
      <p>Thankk youu bro bro, soooo around Feb 22 tayuu MOA hehehe. I'll let you know about the details mwua mwua</p>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmd2YjE1bG5tZmFscmRsdTRhNXVkbTFmN3Nhd3B1Y2pxdW14czNwMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4FGpP4lxGGgK5CBW/giphy.gif">
    </div>
  `;
});
