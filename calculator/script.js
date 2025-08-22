const calculatorScreenElem = document.querySelector(".js-calculation-display");

let calculation = JSON.parse(localStorage.getItem("calculated")) || "";

function updateCalculation(digit) {
  calculation += digit;
  calculatorScreenElem.innerHTML = calculation;
  console.log(calculation);

  localStorage.setItem("calculated", JSON.stringify(calculation));
}
