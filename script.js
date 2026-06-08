const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function displayTime() {
  const date = new Date();

  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const hRotation = 30 * (hh % 12) + mm / 2;
  const mRotation = 6 * mm + ss / 10;
  const sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

displayTime();
setInterval(displayTime, 1000);

const themeContainer = document.getElementById("themeContainer");
const clock = document.getElementById("clock");

function changeTheme(theme) {
  themeContainer.className = `theme-container ${theme}`;
  clock.className = `clock ${theme}`;
}

document.getElementById("darkBtn").addEventListener("click", () => {
  changeTheme("dark");
});

document.getElementById("blueBtn").addEventListener("click", () => {
  changeTheme("blue");
});

document.getElementById("greenBtn").addEventListener("click", () => {
  changeTheme("green");
});
