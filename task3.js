let money;
do {
  money = prompt("Ваш месячный доход?", 0);
} while (isNaN(money) && money)
money = Number(money)

// let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')

let amount;
do {
 amount = prompt ('Во сколько обойдутся обязательные статьи расходов?', 0);
} while (isNaN(amount) && amount)
amount = Number(amount)

// const deposit = confirm("Есть ли у вас вклад в банке?");
// console.log(deposit)

let purpose;
do {
    purpose = prompt('Какую сумму Вы хотите накопить?', 0);
   } while (isNaN(purpose) && purpose)
purpose = Number(purpose)



let profit = 'фриланс, сдача квартиры';
let extraMoney;
do {
    extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`, 0);
   } while (isNaN(extraMoney) && extraMoney)
extraMoney = Number(extraMoney)

function getAccumulatedIncome(money, extraMoney, amount) {
   let budget = money + extraMoney - amount;
   return budget
}

let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount)

function getTargetMonth(purpose, accumulatedIncome) {
    return Math.ceil(purpose / accumulatedIncome)
}
let targetMonth = getTargetMonth(purpose, accumulatedIncome)

let budgetDay = Math.floor(accumulatedIncome / 30);

alert(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome} руб.`)
alert(`Ваша цель накопить ${purpose} руб. с учетом всех ваших расходов будет достигнута через ${targetMonth} месяца`)
alert(`Дневной бюджет: ${budgetDay} руб.`)