const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
const hour = document.querySelector(".hours");
const dots = document.querySelector(".digi-dots");
const dota = document.querySelector(".digi-dota");

setInterval(() => {
  const date = new Date();
  console.log(date);

  const secDegree = (date.getSeconds() / 60) * 360;
  const minDegree = (date.getMinutes() / 60) * 360;
  const hourDegree = (date.getHours() / 12) * 360;

  document.querySelector(".digi-seconds").innerText = date.getSeconds();
  document.querySelector(".digi-minutes").innerText = date.getMinutes();
  document.querySelector(".digi-hours").innerText = date.getHours();

  dots.classList.toggle("hidden");
  dota.classList.toggle("hidden");

  hour.style.transform = "rotate(" + String(hourDegree) + "deg)";
  min.style.transform = "rotate(" + String(minDegree) + "deg)";
  sec.style.transform = "rotate(" + String(secDegree) + "deg)";
}, 1000);
