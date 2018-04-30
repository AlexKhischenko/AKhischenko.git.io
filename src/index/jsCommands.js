//Объявление и присвоение переменных
var userName0 = 'Alex'; //Старый синтаксис через var ECMAScript5.
let userName1 = "Alex"; //Новый синтаксис через let ECMAScript6.
let age; //Процесс объявления переменной.
age = 26; // Процес инициализации переменной (присвоение значения).
const userName2 = `Alex`; //Новый синтаксис через const ECMAScript6, значение которой нельзя перезаписать.


//Типы данных (6 видов данных)
let string = 'Здесь какая-то строка'; // 1. Тип данных STRING - любой тип, записанный в кавычках ``, '', "".
let number = 2; // 2. Тип данных NUMBER - числа, записанные без кавычкек.
let trueFalse = true; // 3. Булетовский тип данных TRUE FALSE.
Number(trueFalse); //Приведение к числу значения переменной trueFalse.
Boolean(string); //Пустая строка выдаст False, иначе выдаст True.
let u; // 4. undefined - неприсвоенная переменная.
number = null; // 5. null - обнуление (освобождение памяти).
// 6. Объект
let person = {
    name: `Alex`,
    age: 32,
    phone: `0000000`,
    status: `admin`,
    adress: {
        city: `Kiev`,
        street: `Lenina, 1`
    }
};
console.log(person.name); //Вывод конкретного значения объекта person.
console.log(person[`age`]); //Вывод конкретного значения объекта person.
console.log(person.adress.city); //Вывод конкретного значения объекта person.


//Процес отладки DEBUG
//Данный процес осуществляется при помощи команды console.log() или более жесткой комманды debugger;
//Debugger работает с открытой вкладкой Sources и Scope.


//Ввод значений
prompt('Enter your text: ', ''); //Ввод значений через модальное окно
let user = prompt('Enter your name: ', ''); //Присвоение введенного знаяения в переменную


//Вывод значений
alert('Hello, World!'); //Вывод информации через модальное окно - старая команда
console.log("Строка " + Переменная + 'Строка'); //конкотинация строк ES5
console.log(`Строка  ${Переменная} Строка`); //конкотинация строк ES6


//Условный оператор (выполняется только одна ветка условия).
let a = 2;
if(a === 2) {
    console.log('True');
} else {
    console.log('False');
}

//Циклы

//Цикл WHILE
while (условие) {
    //Код, тело цикла
}
    //Пример (на экран будут выведены числа от 0 до 2).
let i = 0;
while(i < 3) {
    alert(i);
    i++;
}

//Цикл DO..WHILE
let j = 0;
do {
    alert(j);
    j++;
}
while(j < 3);

//Цикл FOR
for(начало, условие, шаг) {
    //Код, тело цикла
}
    //Пример
let k;
for(k = 0; k < 3; k++) {
    alert(k);
}
//Начало -> (если условие -> тело -> шаг) -> (если условие -> тело -> шаг) и т.д.


//Функции
function name() {
    //Код для исполнения
}

    //Пример
// Функция выводит в console подтверждение о том, что пользователь ввел данные или выдает ошибку)
 function greet () {
     let data = prompt('Enter something');
     if (data && data !== " ") {
         console.log("User entered something");
     }
     else {
         console.log("Invalid data");
     }
}


//Выбор элементов DOM
    //Старый способ, но работающий быстрее, чем query.
document.getElementsByTagName('tag'); //Выбирает из HTML все тэг-элементы, указанные в скобках.
document.getElementsByClassName('class'); //Выбирает из HTML элементы по указанному классу.
document.getElementById('id'); //Выбирает из HTML элементы по указанному ID.
    //Современный способ, но работающий медленее, чем getElement.
document.querySelector('tag'); //Выведет первый тэг на странице, указанный в скобках.
document.querySelectorAll('tag'); //Выведет все тэги со страницы, указанные в скобках.
document.querySelectorAll('div p'); //Найдет все р, вложенные в div.
document.querySelector('.class'); //Выбирает из HTML элементы по указанному классу.
document.querySelector('#id'); //Выбирает из HTML элементы по указанному ID.

//Действия пользователей (события)
    //Действие при нажатии на кнопку мыши
const myButton = document.querySelector(#myBtn); //Выбираем элемент из HTML документа по ID myBtn.
myButton.onclick = name; //Навешиваем событию click выполнение функции name.
    //Добавление текста в существующий элемент с ID myOutput.
const myOutput = document.querySelector(#myOutput); //Выбираем элемент из HTML документа по ID myOutput.
myOutput.textContent = 'Hello, World!'; //Добавляем текст в HTML документ по указанному ID myOutput.
    //Добавление текста в существующий элемент с ID myOutput.
const myOutput = document.querySelector(#myOutput); //Выбираем элемент из HTML документа по ID myOutput.
myOutput.innerHTML = `<h4>Hello, World!</h4>`; /*Добавляем текст с применением HTML тэгов в HTML документ
по указанному ID myOutput. InnerHTML - Автоматически превращает все теги в элементы ДОМ-Дерево.
Также можно добавить class, ID, style.*/
    //Добавление класса вновь создаваемому элементу.
myButton.classList.add('className');
//Присвоение переменной значения input.value.
const value = input.value; //В переменную value будет записан текст, который содержится в input.value.
