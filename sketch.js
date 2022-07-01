const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
const hour = document.querySelector(".hours");

setInterval(() => {
  const date = new Date();
  console.log(date);

  const secDegree = (date.getSeconds() / 60) * 360;
  const minDegree = (date.getMinutes() / 60) * 360;
  const hourDegree = (date.getHours() / 12) * 360;

  hour.style.transform = "rotate(" + String(hourDegree) + "deg)";
  min.style.transform = "rotate(" + String(minDegree) + "deg)";
  sec.style.transform = "rotate(" + String(secDegree) + "deg)";
}, 1000);
