// Task 2: The Even Number Seeker
// বিবরণ: ইনপুট অ্যারে থেকে শুধু জোড় সংখ্যাগুলো (Even Numbers) খুঁজে বের করে একটা নতুন অ্যারে বানিয়ে রিটার্ন করো।

// Input: [12, 5, 7, 20, 8, 11]

// Output: [12, 20, 8]

function evenNumber(numbers) {
  let total = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
       total.push(number);
      // total = number;
}
  }
  return total;
}
const givenArray = [12, 5, 7, 20, 8, 11];
const result = evenNumber(givenArray);
console.log(result);
