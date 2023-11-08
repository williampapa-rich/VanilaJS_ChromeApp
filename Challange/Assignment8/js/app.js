const countDownPanel = document.getElementById("countDown-panel");

function countDownMachine() {
  const dDay = new Date("2023-12-25 00:00:00");
  const now = new Date();
  const timeLeft = dDay - now;

  const day = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  const hour = Math.floor(timeLeft / (60 * 60 * 1000)) - day * 24;
  const minute = Math.floor(timeLeft / (60 * 1000)) - day * 24 * 60 - hour * 60;
  const second =
    Math.floor(timeLeft / 1000) -
    day * 24 * 60 * 60 -
    hour * 60 * 60 -
    minute * 60;

  const countDown = `${day}d ${hour}h ${minute}m ${second}s`;
  countDownPanel.innerText = countDown;
}

countDownMachine();
setInterval(countDownMachine, 1000);

// const hour =
// const minute =
// const second =
