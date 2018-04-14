import './lesson-12.scss';

/*const redLighter = document.querySelector('.red');
const yellowLighter = document.querySelector('.yellow');
const greenLighter = document.querySelector('.green');*/

function lighter(htmlElement) {
    console.log(htmlElement);
    const lighters = htmlElement.querySelectorAll('.light');
    for(let light of lighters) {
        light.onclick = function () {
            toggleOff();
            light.classList.add('active');
        }
    }
    function toggleOff() {
        for (let light of lighters) {
            light.classList.remove('active');
        }
    }
}
lighter(document.querySelector('#lighterFirst'));
lighter(document.querySelector('#lighterSecond'));
lighter(document.querySelector('#lighterThird'));


/*function alert (message) {
    console.log('Your message: ' + message)
}
alert('dkjfkls');
alert('Hello');
alert('Alex');
console.log(lighters);*/
/*
redLighter.onclick = function () {
    redLighter.classList.add('active');
};
yellowLighter.onclick = function () {
    yellowLighter.classList.add('active');
};
greenLighter.onclick = function () {
    greenLighter.classList.add('active');
};
*/

