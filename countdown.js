const elmDay = document.querySelector(".day");
const elmHour = document.querySelector(".hour");
const elmMin = document.querySelector(".min");
const elmSec = document.querySelector(".sec");

const rewriteTime = () => {
  const now = new Date();
  const kanpaiTime = new Date("2024/07/05 19:07");
  const differ = kanpaiTime.getTime() - now.getTime();

  const sec = Math.floor(differ / 1000) % 60;
  const min = Math.floor(differ / 1000 / 60) % 60;
  const hour = Math.floor(differ / 1000 / 60 / 60) % 24;
  const day = Math.floor(differ / 1000 / 60 / 60 / 24) % 24;

  if (now > kanpaiTime) {
    elmHour.textContent = "0";
    elmMin.textContent = "00";
    elmSec.textContent = "00";
    elmDay.textContent = "0";
  } else {
    elmDay.textContent = String(day);
    elmHour.textContent = String(hour);
    elmMin.textContent = String(min).padStart(2, "0");
    elmSec.textContent = String(sec).padStart(2, "0");
  }
};

setInterval(rewriteTime, 1000);