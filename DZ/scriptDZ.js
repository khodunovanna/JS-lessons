"use strict"; /* дириктива, это означает, что мы пишем на стандарте us6  */


/* DZ - 1 */

let money, time; /* Обьявляем переменные глобально, что б они везде были видны */

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');  /* + превращает строку в число */
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while(isNaN(money) || money == "" || money == null) {     /*  isnan возвращает true, если туда попали не цифры, null-для того,что б пользователь не нажал отмена */
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {    /* создали метод обьекта appData */
    for (let i=0; i<2; i++) {
      let article = prompt("Введите обязательную статью расходов в этом месяце", '');
      let pay = prompt("Во сколько обойдется?", '');
    
      if ((typeof(article))==='string' && (typeof (article)) != null && (typeof (pay)) != null 
          && article != '' && pay != '' && article.length < 50) {
          console.log("done");
          appData.expenses[article] = pay;
      } else {
        i = i-1;
      }
    }
  },
  detectBudgerDaily: function() {
    appData.budgetDaily = (appData.budget/30).toFixed(1);   /* Округляем число, если 0-до целого, если 1-до одного зака после зяпятой и он меняет переменную и возвращает строковое значение */
    alert(appData.budgetDaily + " - ежеденевный бюджет");
  },
  detectLevel: function() {
    if (appData.budgetDaily < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.budgetDaily >100 && appData.budgetDaily < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.budgetDaily > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    } 
  },
  checkSavings: function() {
    if(appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for(let i=1; i<4; i++) {
      let opt = prompt("Статья необязательных расходов?", '');
  
      if (opt != null && opt != '') {
        console.log("done");
        appData.optionalExpenses[i] = opt;
      } else {
        i = i-1;
      } 
    }
  },
  chooseIncome: function() {
    for(let i = 0; i<1; i++) {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
    if ((typeof(items)) === 'string' && items != '' && items != null) {
      console.log("done");
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
      appData.income.forEach(function(item, i) {
        alert(" Способы доп заработка: " + i + " - " + item);
      });
    } else {
      i=i-1;
    }
    }
  }
};

function dataAppData() {
  for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
  }
}
dataAppData();


// let x = 5;
// alert ( x++ );

// alert ( "1"[0]);
// console.log([]+false-null+true);

// console.log([] + 1 + 2);

// console.log(2 && 1 && null && 0 && undefined);

// console.log( 3 && 2 && 4 && undefined && 1);

// console.log( null || 2 && 3 || 4 );  /* 3 */

// let y = 1;
// let x = y = 2;
// alert(x);

// alert( + "Infinity" );

// console.log( 0 || "" || 2 || undefined || true || falsе ); /* 2 */