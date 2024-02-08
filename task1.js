const money = 80000;
const profit = 'фриланс';
const expenses = 'питание, жку, подписки, хозтовары';
const purpose = 50000;
const period = 10;

console.log(typeof money, typeof profit)
console.log(expenses.length)
console.log(`**Период равен ${period} месяцев**`)
console.log(`**Цель заработать ${purpose} рублей/долларов**`)
const budgetDay = money / 30;
console.log(Math.round(budgetDay))
const arrExpenses = (expenses.toLowerCase()).split(',');
console.log(arrExpenses)