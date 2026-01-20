function monthlySavings(payments, livingCost) {
  let totalIncome = 0;
  for (let i = 0; i < payments.length; i++) {
    let payment = payments[i];
    if (payment >= 3000) {
      let taxWillBe = payment * 0.2;
      totalIncome = totalIncome + (payment - taxWillBe);
    } else {
          totalIncome = totalIncome + payment;
    }
  }
  let savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
