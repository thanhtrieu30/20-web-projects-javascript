const adduser = document.getElementById("adduser");
const doublemoney = document.getElementById("doublemoney");
const showmillion = document.getElementById("showmillion");
const sortuser = document.getElementById("sortuser");
const total = document.getElementById("total");
const main = document.getElementById("main");

let data = [];

const randomUser = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.title}.${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
};

const addData = (obj) => {
  data.push(obj);
  updateDom();
};

const updateDom = (coppyData = data) => {
  coppyData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("info-all");
    element.innerHTML = `<span class="info-person">${item.name}</span>
  <span>${item.money}</span>`;
    main.appendChild(element);
  });
};

adduser.addEventListener("click", randomUser);
doublemoney.addEventListener("click", doubleMoney);
sortuser.addEventListener("click", sortUser);
