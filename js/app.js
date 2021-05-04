'use strict';

let table = document.getElementById('newTable');
let form = document.getElementById('newForm');

let age = 0;
Donation.arrayAll = [];

function Donation(name, age, amount) {
    this.name = name;
    this.age = age;
    this.amount = amount;
    this.tableContent = [name, age, amount];
    Donation.arrayAll.push(this);
}

age = Math.floor(Math.random() * (30 - 18)) + 18;
console.log(age);

Donation.prototype.render = function() {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let i = 0; i < 3; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = this.tableContent[i];


    }
}

let sum = 0;

function totalFunction() {
    let total = document.createElement('tr');
    table.appendChild(total);
    total.textContent = "Total";
    let th = document.createElement('th');
    total.appendChild(th);
    for (let i = 0; i < Donation.arrayAll; i++) {
        sum = sum + Donation.amount[i];
    }
    th.textContent = sum;
}


form.addEventListener('submit', handlClick);

function handlClick(event) {
    event.preventDefault();

    let name = event.target.newText.value;
    let amount = event.target.newNumber.value;
    age = Math.floor(Math.random() * (30 - 18)) + 18;
    let newDonor = new Donation(name, age, amount);
    newDonor.render();
    totalFunction();
    saveLocal();
    console.log(age);
    getLocalStorage();

}
getLocalStorage();

function saveLocal() {
    let values = JSON.stringify('values', Donation.arrayAll);
    localStorage.setItem(values);
    console.log(values);
}

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