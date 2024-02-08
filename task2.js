const money = prompt('Ваш месячный доход?');
const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
const amount = prompt ('Во сколько обойдутся обязательные статьи расходов?')

const deposit = confirm("Есть ли у вас вклад в банке?");
console.log(deposit)

const budgetMonth = money - amount;
console.log(budgetMonth)

const purpose = prompt('Какую сумму Вы хотите накопить?')
const period = Math.ceil(purpose / budgetMonth)
console.log(period)

const budgetDay =  Math.floor(budgetMonth / 30);
console.log(budgetDay)

let budget = (budgetDay > 60000) ? 'У вас высокий уровень дохода!' :
  (budgetDay > 30000 && budgetDay <= 60000) ? 'У вас средний уровень дохода' :
  (budgetDay >= 0 && budgetDay <= 30000) ? 'К сожалению у вас уровень дохода ниже среднего' :
  'Что-то пошло не так';
alert(budget)
