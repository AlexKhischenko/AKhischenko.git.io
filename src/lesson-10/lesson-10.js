// const name = prompt("Enter loggin");
// const secretName = 'admin';
// const pass = 123;
// if (name === secretName) {
//     const password = prompt('Enter password');
//     if (password == pass) {
//         console.log("Hello, admin");
//     } else {
//         console.log("Password is wrong");
//     }
//
// } else {
//     console.log("Loggin is wrong");
// }
// let person = {
//     name: prompt('Enter your name', ),
//     age: 32,
//     eyesColor: 'gray',
//     height: '170'
// };
// console.log("My name is " + person.name);
// console.log("I am " + person.age + ' years old');
// console.log("My eyes color is " + person.eyesColor);
// console.log("My height is " + person.height + ' cm');
import './lesson-10.scss';
const myButton = document.querySelector('#myBtn');
const myOutput = document.querySelector('#output');
const nameField = document.querySelector('#nameField');
const passwordField = document.querySelector('#passwordField');
const btnAdd = document.querySelector('#btnAdd');
const newElements = document.querySelector('#newElements');
// console.log(myButton);

// Функция выводит в консоль данные, которые ввел пользователь через prompt (задействована const myButton = document.querySelector('#myBtn')
// function greet () {
//     let data = prompt('Enter something');
//     if (data && data !== " ") {
//         console.log("Hello " + data);
//     }
//     else {
//         console.log("Invalid data");
//     }
// }

// Функция выводит в div данные, которые ввел пользователь через prompt (задействована const myOutput = document.querySelector('#output')
// function greet () {
//     let data = prompt('Enter something');
//     if (data && data !== " ") {
//         myOutput.textContent = data;
//     }
//     else {
//         myOutput.textContent = "Invalid output";
//     }
// }

// function greet () {
//     let data = prompt('Enter something');
//     if (data && data !== " ") {
//         myOutput.innerHTML = `<h2>Hello ${data} </h2>`;
//     }
//     else {
//         myButton.classList.add('not-valid');
//         myOutput.innerHTML = `<h3 style="color:red">Not valid data</h3>`;
//     }
// }

// myButton.onclick = login;
//
// function login () {
//     const name = nameField.value;
//     nameField.value = '';
//     if (name && name !== " ") {
//         myOutput.innerHTML = `<h2>Hello ${name} </h2>`;
//     }
//     else {
//         myButton.classList.add('not-valid');
//         myOutput.innerHTML = `<h3 style="color:red">Not valid data</h3>`;
//     }
// }

myButton.onclick = login;
function login () {
    const legalName = "admin";
    const legalPass = "123";
    const name = nameField.value;
    const password = passwordField.value;
    nameField.value = '';
    passwordField.value = '';
    if (name && password) {
        if (name === legalName && password === legalPass) {
            myOutput.innerHTML = `<h2>Welcome Admin!</h2>`;
        } else {
            myOutput.innerHTML = `<h2>Credential are wrong!</h2>`;
        }
    } else {
        myOutput.innerHTML = `<h3 style="color:red">Not valid input!</h3>`;
    }
}

function addElement () {
    const newElement = document.createElement('div');
    console.log(newElement);
    newElement.innerHTML = 'Hello world';
    newElements.appendChild(newElement);
}
btnAdd.onclick = addElement;