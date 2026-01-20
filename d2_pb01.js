// Task 1: Find the Smallest
// বিবরণ: একটা সংখ্যার অ্যারে দেওয়া আছে। লুপ চালিয়ে সবচেয়ে ছোট সংখ্যাটা খুঁজে বের করো।

// Input: [34, 15, 88, 2, 55]

// Output: 2
function smallestNumber(numbers) {
  let small =numbers [0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]< small){
      small = numbers[i];
    }
    
  }
  return small;
}
// const input = [34, 15, 88, 2, 55];
// const little = smallestNumber(input);
// console.log(little);
function smallestNumber(numbers){
      let small = numbers[0];
      for (const number of numbers){
            if(number < small){
                  small = number;
            }
      }
      return small;
}
const input = [34, 15, 88, 2, 55];
const little = smallestNumber(input);
console.log(little);