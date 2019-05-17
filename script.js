"use strict"; /* дириктива, это означает, что мы пишем на стандарте us6  */

// var a = 10;
// let b = 20;
// const pi = 3.14;
// a = 30;
// console.log(a);

// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null; /*когда чего-то в коде просто не существует*/
// undefined; /*когда переменная существует но ей ничего не присвоено(не имеет значения)*/
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let person = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };

// // console.log(person.name);
// console.log(person["name"]);

// let arr = ['plam.png', 'orange.jpg', 'apple.bmp']; /*массив данных, может содержать любые значения, не обязательно однородные */

// console.log(arr[2]);

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


// let isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose); /* и */
// console.log(isChecked || isClose); /* или */
// console.log(isChecked || !isClose); /* или не */



// for (i=1; i<10; i++) {
//   if (i%2-1) {
//     continue;
//   }
//   console.log(i);
// }


// console.log(calc(3, 5));
// console.log(calc(2, 4));
// function calc(a, b) {
//   return(a+b);
// }   /* функция вызывается и до ее обьявление, но если... */


// let calc = function (a, b) {
//   return(a+b);
// }   /* так она не может быть вызвана до обьяления */


// let calc = (a, b) => a+b;
// console.log(calc(3, 5));
// console.log(calc(2, 4));


// function retVar() {
//   let num = 50;
//   return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);



// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// let twelve = "12.2px";
// // console.log(Math.round(twelve)); /* округляем до целого */
// console.log(parseInt(twelve));  /* Возвращает целое число */
// console.log(parseFloat(twelve));  /* Возвращает десятичное число */



// function learnJS(lang, callback) {
//   console.log("Я учу" + lang);
//   callback();
// } 

// learnJS("Java Script", function(){
//   console.log("Я прошел 3-ий урок");
// })



// let options = {
//   wight: 1024,
//   height: 1024,
//   name: "rectangle"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//   border: "black",
//   bg: "red"
// };

// delete options.bool;

// console.log(options);

// for(let key in options) {
//   console.log("Свайство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);




// let arr = ["first", 2, 3, "four", 5];
// // arr[99] = 99;
// // console.log(arr.length);    /* команда length возвращает поледний индекс +1, в данном случае вернет 100 */

// // for(let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);    /* перебор эл массива-1 */
// // }

// // arr.pop();    /* удалить послений эл в массиве */
// // arr.push('5');    /* добавить послений эл в массиве */
// // arr.shift();    /* удалить первый эл в массиве */
// // arr.unshift('1');   /* добавить первый эл в массиве */

// arr.forEach(function(item, i, mass) {
//   console.log(i + ": " + item + " (массив: " + mass + ")");
// });   /*  перебор эл массива-2 */
// console.log(arr);

// let mass = [1, 3, 5, 6, 9];
// for(let key of mass) {    /* in-для получения порядкового номера, of-для получения значения */
//   console.log(key);
// }   /* перебор эл массива-3(новый) */



// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');  /* строку преобразовывает в массив */
// console.log(arr);

// let arr = ['ddsc', 'yfg', 'bdhgd', 'klkjh'],
//     i = arr.join(', ');    /* взять массив и отправить его одной строкой */
// console.log(i);

// let arr = ['ddsc', 'yfg', 'bdhgd', 'klkjh'],
//     i = arr.sort();    /* сортирует массив по алфавиту */
// console.log(arr);

/* но если это цифры, то сортирует как строки, по первому значению, для того,чтоб работало правильно, нужна callback */
// let arr = [1, 32, 5, 17],
//     i = arr.sort(comperNum);    /* функция БЕЗ ()-передаем функцию, не ее результат, а с ()-вызываем ее */   
// function comperNum(a,b) {
//   return a-b;
// }
// console.log(arr);



// let soldier = {
//   health: 400,
//   armor: 100
// };

// let john = {
//   health: 100
// };

// john.__proto__ = soldier;   /* John является потомком от солдата */

// console.log(john);
// console.log(john.armor);

