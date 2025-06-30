let display = document.getElementById("result");

function valueAdd(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

// Responsive code
function makeResponsive() {
  const calc = document.querySelector(".calculator");
  const width = window.innerWidth;

  if (width <= 768) {
    calc.style.width = "90%";
    calc.style.height = "70%";
  } else if (width <= 1024) {
    calc.style.width = "60%";
    calc.style.height = "75%";
  } else {
    calc.style.width = "30%";
    calc.style.height = "80%";
  }
}

window.addEventListener("load", makeResponsive);
window.addEventListener("resize", makeResponsive);
