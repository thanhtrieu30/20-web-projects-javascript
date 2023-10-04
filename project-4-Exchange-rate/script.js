const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

function calculate() {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwo.value];

      rateEl.innerText = `1${currencyOne.value} = ${rate}${currencyTwo.value}`;
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);

swap.addEventListener("click", function () {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
