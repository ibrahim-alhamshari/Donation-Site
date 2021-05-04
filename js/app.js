'use strict';

let table = document.getElementById('newTable');
let min = 18;
let max = 30;

Donation.arrayAll = [];

function Donation(name, age, amount) {
    this.name = name;
    this.age = age;
    this.amount = amount;
    this.tableContent = [name, age, amount];
    Donation.arrayAll.push(this);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


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

    let y = new Donation(name, amount);
    y.handlClick();
}