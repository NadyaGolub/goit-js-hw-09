function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  
});