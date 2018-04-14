/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var myButton = document.querySelector('#myBtn'); // const name = prompt("Enter loggin");
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

var myOutput = document.querySelector('#output');
var nameField = document.querySelector('#nameField');
var passwordField = document.querySelector('#passwordField');
var btnAdd = document.querySelector('#btnAdd');
var newElements = document.querySelector('#newElements');
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
function login() {
    var legalName = "admin";
    var legalPass = "123";
    var name = nameField.value;
    var password = passwordField.value;
    nameField.value = '';
    passwordField.value = '';
    if (name && password) {
        if (name === legalName && password === legalPass) {
            myOutput.innerHTML = '<h2>Welcome Admin!</h2>';
        } else {
            myOutput.innerHTML = '<h2>Credential are wrong!</h2>';
        }
    } else {
        myOutput.innerHTML = '<h3 style="color:red">Not valid input!</h3>';
    }
}

function addElement() {
    var newElement = document.createElement('div');
    console.log(newElement);
    newElement.innerHTML = 'Hello world';
    newElements.appendChild(newElement);
}
btnAdd.onclick = addElement;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);