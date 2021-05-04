'use strict';

let table = document.getElementById('newTable');
let min = 18;
let max = 30;
let age = 0;
Donation.arrayAll = [];

function Donation(name, age, amount) {
    this.name = name;
    this.age = age;
    this.amount = amount;
    this.tableContent = [name, age, amount];
    Donation.arrayAll.push(this);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    age = parseInt(Math.floor(Math.random() * (max - min) + min));
    console.log(age);
    return age;
}


getRandomInt();

Donation.prototype.render = function() {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let i = 0; i < 3; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = this.tableContent[i];


    }
}

let form = document.getElementById('newForm');
form.addEventListener('submit', handlClick);

function handlClick(event) {
    event.preventDefault();

    let name = event.target.newText.value;
    let amount = event.target.newNumber.value;

    let newDonor = new Donation(name, age, amount);
    localStorage.setItem("lastname", name);
    localStorage.setItem('age', age);
    localStorage.setItem('amount', amount);

    newDonor.render();
    // saveLocal();
    console.log(age);
    getLocalStorage();
}
getLocalStorage();
// function saveLocal() {
//     let values = JSON.stringify('values', Donation.arrayAll);
//     localStorage.setItem(values);
//     console.log(values);
// }

function getLocalStorage() {
    let data = localStorage.getItem('values');
    let content = JSON.parse(data);
    if (content) {
        for (let i = 0; i < content.length; i++) {
            let reInst = new Donation(content[i].name, content[i].age, content[i].amount);
            reInst.render();
        }

    }
}