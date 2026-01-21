const num = [10, 15, 33, 40, 9];
function oddNumber(numbers) {
  let total = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      total++;
    }
  }
  return total;
}
console.log(oddNumber(num));

// Task 2: The Money Bag (Type Checker)
// Ekta function likho ja mixed array theke shudhu Number gulo jog korbe.

// Input: [100, "Bus", 50, "Lunch", 20]
function moneyBag(typeChecker) {
  let totalCount = 0;
  for (let type of typeChecker) {
    if (typeof type === "number") {
      totalCount += type;
    }
  }
  return totalCount;
}

const input = [100, "Bus", 50, "Lunch", 20];
console.log(moneyBag(input));

// Multiplication (Initial Value Trap)
// Ekta function likho ja array er sob sonkha gun (multiply) korbe.

// Input: [2, 3, 4]
function multiply(numbers) {
  let totalMult = 1;
  for (let number of numbers) {
    totalMult = totalMult * number;
  }
  return totalMult;
}
const totalElem = [2, 3, 4];
console.log(multiply(totalElem));
