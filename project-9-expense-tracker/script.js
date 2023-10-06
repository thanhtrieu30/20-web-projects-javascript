const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const submit = document.getElementById("submit");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransaction = [];

const transactions = dummyTransaction;

function generateID() {
  return Math.floor(Math.random() * 100000);
}

// console.log(transaction.forEach((e) => console.log(e.price)));

function addTransactionDom() {
  transactions.forEach((e) => {
    const sign = e.price < 0 ? "-" : "+";
    const item = document.createElement("div");
    item.classList.add("history-element");

    item.classList.add(e.price < 0 ? "minus" : "plus");
    item.innerHTML = ` <span>${e.name}</span>
    <span>${sign}${Math.abs(e.price)}</span>`;

    list.appendChild(item);
  });
}

function updatePrice() {
  const price = transactions.map((e) => e.price);

  const total = price.reduce((acc, cur) => acc + cur, 0).toFixed(2);

  const incomePrice = price
    .filter((e) => e > 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
  const expensePrice = price
    .filter((e) => e < 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  balance.innerText = `$${total}`;
  income.innerText = `$${incomePrice}`;
  expense.innerText = `$${expensePrice}`;
}

function addForm(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("plz enter transaction");
  } else {
    const transaction = {
      id: generateID(),
      name: text.value,
      price: +amount.value,
    };
    dummyTransaction.push(transaction);
    addTransactionDom();
    updatePrice();
    text.value = "";
    amount.value = "";
  }
}

// console.log(expensePrice);

function init() {
  list.innerHTML = "";
  addTransactionDom();
  updatePrice(); // balance | income | expense
}

init();
submit.addEventListener("submit", addForm);
