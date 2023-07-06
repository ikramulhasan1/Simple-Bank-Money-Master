// totalIncome Balance
function totalIncome(incomeValueString) {
  const income = document.getElementById('income');
  incomeValueString = income.value;
  return incomeValueString;
}

function expenses(getInputId) {
  const expensesElements = document.getElementById(getInputId);
  const expensesElementsValue = expensesElements.value;
  const expensesElementsNumber = parseInt(expensesElementsValue);

  expensesElements.value = '';
  return expensesElementsNumber;
}


// calculate Button
document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeValueString = totalIncome();

  const food = expenses('food');
  const rent = expenses('rent');
  const clothes = expenses('clothes');

  // Expense Total & Balance Total 

  const expensesTotal = food + rent + clothes;
  const totalExpense = document.getElementById('total-expense');
  totalExpense.innerText = expensesTotal;

  const balanceTotal = incomeValueString - expensesTotal;
  const balance = document.getElementById('balance');
  balance.innerText = balanceTotal;

})


// Save Button
document.getElementById('save-btn').addEventListener('click', function () {
  console.log('clicked');

  const incomeValueString = totalIncome();

  const saveInput = document.getElementById('save');
  const saveInputValue = saveInput.value;

  const savingTotalAmount = (saveInputValue / 100) * incomeValueString;
  const savingAmount = document.getElementById('saving-amount');
  savingAmount.innerText = Math.round(savingTotalAmount);

  const balance = document.getElementById('balance');
  const balanceTotal = balance.innerText;

  const remainingBalance = document.getElementById('remaining-balance');
  remainingBalance.innerText = Math.round(balanceTotal - savingTotalAmount)
})

