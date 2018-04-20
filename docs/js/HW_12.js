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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

var blocks = document.querySelectorAll('.block');
var headers = document.querySelectorAll('.header');
var check = void 0;

var _loop = function _loop(i) {
    headers[i].addEventListener('click', toggleOn);
    headers[i].addEventListener('keypress', function (eventObject) {
        if (eventObject.keyCode === 13) {
            toggleOn();
        }
    });
    function toggleOn() {
        toggleOff();
        if (check === i) {
            check = -1;
        } else {
            blocks[i].classList.add('active');
            check = i;
        }
    }
};

for (var i = 0; i < headers.length; i++) {
    _loop(i);
}
function toggleOff() {
    for (var j = 0; j < blocks.length; j++) {
        blocks[j].classList.remove('active');
    }
}

/*const accordionBlock = document.querySelectorAll('.block');

function accordion (htmlElement) {
    console.log(htmlElement);
    const header = document.querySelectorAll('.header');
    const block = document.querySelectorAll('.block');
    // let isOpened = htmlElement.classList.contains('active');
    let isOpened = false;
    for(let i=0; i<header.length; i++) {
    header[i].addEventListener('click', checkOpenClose);
    header[i].addEventListener('keypress', (eventObject) => {
        if (eventObject.keyCode === 13) {
            checkOpenClose();
        }
    });

    function checkOpenClose(){
        if(isOpened){
            close();
        } else {
            open();
        }
    }

    function open() {
        block[i].classList.add('active');
        isOpened = true;
    }
    function close() {
        block[i].classList.remove('active');
        isOpened = false;
    }
    }

}

accordionBlock.forEach((el) => {
    accordion(el);
});



function accordion (htmlElement) {
    const header = htmlElement.querySelector('.header');
    // const content = htmlElement.querySelectorAll('.content');
    let isOpened = htmlElement.classList.contains('active');
        header.addEventListener('click', checkOpenClose);

        console.log(header);
        console.log(htmlElement);

    function checkOpenClose(){
        if(isOpened){
            close();
        } else {
            open();
        }
    }
    function open() {
        htmlElement.classList.add('active');
        isOpened = true;
    }
    function close() {
        htmlElement.classList.remove('active');
        isOpened = false;
    }
}
let counter;
counter = document.querySelectorAll('.block');
for (let i=0; i<counter.length; i++) {
    accordion(counter[i]);
}*/

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });