let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),

    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time; /* Обьявляем переменные глобально, что б они везде были видны */
let sum = 0;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');  /* + превращает строку в число */

  while(isNaN(money) || money == "" || money == null) {     /*  isnan возвращает true, если туда попали не цифры, null-для того,что б пользователь не нажал отмена */
    money = +prompt("Ваш бюджет на месяц?", '');
  }
  appData.timeData = time;
  appData.budget = money;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {

  for (let i=0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
        b = expensesItem[++i].value; //префиксная форма, сначала увеличивает i, потом возвращает
  
    if ((typeof(a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        sum += +b;
    } else {
      i = i-1;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
  for(let i=0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function() {

  if (appData.budget != undefined) {
    appData.budgetDaily = ((appData.budget-sum)/30).toFixed(1);   /* Округляем число, если 0-до целого, если 1-до одного зака после зяпятой и он меняет переменную и возвращает строковое значение */
    daybudgetValue.textContent = appData.budgetDaily;
  
    if (appData.budgetDaily < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.budgetDaily >100 && appData.budgetDaily < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.budgetDaily > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    } 
  } else {
    daybudgetValue.textContent = 'Произошла ошибка';
  }
});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
      let sum = +sumValue.value,
          percent = +percentValue.value; //+ для преобразования в числовой тип данных
      appData.monthIncome = sum/100/12*percent;
      appData.yearIncome = sum/100*percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
    percent = +percentValue.value; //+ для преобразования в числовой тип данных
appData.monthIncome = sum/100/12*percent;
appData.yearIncome = sum/100*percent;

monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
