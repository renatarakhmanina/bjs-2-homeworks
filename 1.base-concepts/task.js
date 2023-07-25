"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonthly = percent / 100 / 12;
  let loanBody = amount - contribution;
  let paymentMonthly = loanBody * (percentMonthly + (percentMonthly / (Math.pow((1 + percentMonthly), countMonths) - 1)));
  let totalMortage = +(paymentMonthly * countMonths).toFixed(2);
  return totalMortage;
}