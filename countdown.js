const elmHour = document.querySelector(".hour");
const elmMin = document.querySelector(".min");
const elmSec = document.querySelector(".sec");

const rewriteTime = () => {
  const now = new Date();
  const kanpaiTime = new Date("2023/07/07 19:07");
  const differ = kanpaiTime.getTime() - now.getTime();

  const sec = Math.floor(differ / 1000) % 60;
  const min = Math.floor(differ / 1000 / 60) % 60;
  const hour = Math.floor(differ / 1000 / 60 / 60);

  if (now > kanpaiTime) {
    elmHour.textContent = String(0);
    elmMin.textContent = String(0).padStart(2, "0");
    elmSec.textContent = String(0).padStart(2, "0");
  } else {
    elmHour.textContent = String(hour);
    elmMin.textContent = String(min).padStart(2, "0");
    elmSec.textContent = String(sec).padStart(2, "0");
  }
};

setInterval(rewriteTime, 1000);