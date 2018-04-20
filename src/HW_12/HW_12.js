import './HW_12.scss';

const blocks = document.querySelectorAll('.block');
const headers = document.querySelectorAll('.header');
let check;

for (let i=0; i<headers.length; i++) {
    headers[i].addEventListener('click', toggleOn);
    headers[i].addEventListener('keypress', (eventObject) => {
        if (eventObject.keyCode === 13) {
            toggleOn();
        }
    });
function toggleOn() {
    toggleOff();
    if (check === i) {
        check = -1;
    }
    else {
        blocks[i].classList.add('active');
        check = i;
    }
}
}
function toggleOff () {
    for (let j=0; j<blocks.length; j++) {
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
