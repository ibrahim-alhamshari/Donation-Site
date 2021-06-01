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
let total = document.createElement('tr');
table.appendChild(total);
total.textContent = "Total";

function totalFunction() {

    if (Donation.amount == '100') {
        alert('yes');
    } else {
        let th = document.createElement('th');
        total.appendChild(th);

        for (let i = 0; i < 3; i++) {
            console.log(Donation.amount[i]);
            sum = sum + Donation.amount[i];


        }
        th.textContent = sum;
        console.log(sum);
    }
    alert('no');
}


form.addEventListener('submit', handlClick);

function handlClick(event) {
    event.preventDefault();

    let name = event.target.newText.value;
    let amount = event.target.newNumber.value;
    age = Math.floor(Math.random() * (30 - 18)) + 18;
    parseInt(amount);
    console.log(typeof(amount));

    let newDonor = new Donation(name, age, amount);

    console.log(newDonor.amount);

    newDonor.render();
    totalFunction();
    // saveLocal();

    getLocalStorage();

}



getLocalStorage();

function saveLocal() {
    let values = JSON.stringify(Donation.arrayAll);
    localStorage.setItem('values', values);
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