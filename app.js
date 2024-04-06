let btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {
  function countdownClockView(number) {
    const clockElement = document.getElementById("clock");

    let soat = Math.floor(number / 3600);
    let minut = Math.floor((number % 3600) / 60);
    let sekund = Math.floor(number % 60);

    soat = soat < 10 ? "0" + soat : soat;
    minut = minut < 10 ? "0" + minut : minut;
    sekund = sekund < 10 ? "0" + sekund : sekund;

    clockElement.textContent = `${soat}:${minut}:${sekund}`;

    if (number > 0) {
      setTimeout(() => countdownClockView(number - 1), 1000);
    } else {
      clockElement.textContent = "00:00:00";
    }
  }

  let input = prompt("sekund kiritin");
  let num = parseInt(input);

  if (!isNaN(num) && num >= 0) {
    countdownClockView(num);
  } else {
    alert("voxt boldi");
  }
});
