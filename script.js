'use strict'; /* дириктива, это означает, что мы пишем на стандарте us6  */

// var a = 10;
// let b = 20;
// const pi = 3.14;
// a = 30;
// console.log(a);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null; /*когда чего-то в коде просто не существует*/
undefined; /*когда переменная существует но ей ничего не присвоено(не имеет значения)*/
var obj = {};

console.log(4/0);
console.log('string'*9);

let person = {
  name: "John",
  age: 25,
  isMarried: false
};

// console.log(person.name);
console.log(person["name"]);

let arr = ['plam.png', 'orange.jpg', 'apple.bmp']; /*массив данных, может содержать любые значения, не обязательно однородные */

console.log(arr[2]);

// alert("Hello world!");
// confirm("Are you here?");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Есть ли вам 18?", "Да");
// console.log(answer);

//console.log(typeof(arr)); /* Проверка данных на тип */

//console.log("arr" + " - object");
//console.log(5 + +" - dhfkdnf"); /*превращает строку в число */


// let incr = 10,
//     decr = 10;
// // incr ++;
// // decr --;

// console.log(incr--, decr++);
// console.log(5%2);

// console.log("2" == 2); /* сравнение по значениям */
// console.log("2" === 2); /* сравнение по типам данных */


let isChecked = true,
    isClose = false;

console.log(isChecked && isClose); /* и */
console.log(isChecked || isClose); /* или */
console.log(isChecked || !isClose); /* или не */