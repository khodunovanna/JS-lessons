let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    column = document.querySelectorAll('.column'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    pr = document.querySelector('.prompt');

//menuItem[1].style.backgroundColor = 'red';
//menu.removeChild(menuItem[1], menuItem[2]);
menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
    //text = document.createTextNode('Пятый пункт');
li.classList.add('menu-item');
//li.innerHTML = 'Пятый пункт'; /* или */
li.textContent = 'Пятый пункт';
//console.log(li);
//document.body.appendChild(li);
menu.appendChild(li);

let div = document.createElement('div');
div.classList.add('title');
div.textContent = 'Мы продаем только подлинную технику Apple';
column[1].replaceChild(div, title);

column[1].removeChild(adv); /* удалили рекламу */

let question = prompt("Ваше отношение к технике Apple?");
pr.textContent = question;
