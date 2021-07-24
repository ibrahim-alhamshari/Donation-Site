'use strict';

let table = document.getElementById('newTable');
let form = document.getElementById('newForm');
let newRaw = document.getElementById('paragraph');

let age = 0;
Donation.arrayAll = [];

function Donation(name, age, amount) {
    this.name = name;
    this.age = age;
    this.amount = amount;
    this.tableContent = [name, age, amount];
    Donation.arrayAll.push(this);
}

let total = document.createElement('li');
newRaw.appendChild(total);
let sum = 0;

Donation.prototype.render = function () {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let i = 0; i < 3; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = this.tableContent[i];
    }

    if (this.amount == '100') {
        sum = sum + 100;
        total.textContent = sum;
    } else if (this.amount == '500') {
        sum = sum + 500;
        total.textContent = sum;
    } else if (this.amount == '1000') {
        sum = sum + 1000;
        total.textContent = sum;
    }

}




form.addEventListener('submit', handlClick);

function handlClick(event) {

    event.preventDefault();
    console.log("preventDefault");


    let name = event.target.newText.value;
    let amount = event.target.newNumber.value;
    age = Math.floor(Math.random() * (30 - 18)) + 18;
    parseInt(amount);

    let newDonor = new Donation(name, age, amount);

    console.log(newDonor.amount);
    newDonor.render();
    saveLocal();
    // getLocalStorage();
}




function saveLocal() {
    let values = JSON.stringify(Donation.arrayAll);
    localStorage.setItem('values', values);
    console.log(values);
}
let i = 0;
getLocalStorage();
function getLocalStorage() {

    let data = localStorage.getItem('values');
    let content = JSON.parse(data);
    if (i == 0) {

        console.log(i);
        for (i; i < content.length; i++) {
            console.log("length" + content.length);
            console.log(i);
            let reInst = new Donation(content[i].name, content[i].age, content[i].amount);
            reInst.render();

        }
        i = content.length + 1;


    }
}
