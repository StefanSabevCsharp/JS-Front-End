let userToken = sessionStorage.getItem('userToken');
let userId = sessionStorage.getItem('userId');
let email = sessionStorage.getItem('email');
loginbtn = document.getElementById("login");
let div = document.getElementById("guest");
div.style.display = 'none';

console.log(userToken);
console.log(userId);
console.log(email);
console.log('-------------------');
let username = document.querySelector('span').textContent = email;

// let baseUrl = 'http://localhost:3030/data/catches';
// let loadBtn = document.querySelector('button.load');
// let addBtn = document.querySelector('button.add');
// let updateBtn = document.querySelector('button.update');
// let deleteBtn = document.querySelector('button.delete');
// let angler = document.querySelector('fieldset > input.angler');
// let weight = document.querySelector('fieldset > input.weight');

