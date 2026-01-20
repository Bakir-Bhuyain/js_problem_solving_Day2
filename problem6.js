// Task 5: Bad Data Cleaner
// বিবরণ: ধরো তোমার কাছে একটা অ্যারে আছে যেখানে কিছু সংখ্যা আছে, কিন্তু ভুল করে কিছু নেগেটিভ সংখ্যা (Negative numbers) ঢুকে পড়েছে। তোমার কাজ হলো একটা ফাংশন লেখা যা শুধু পজিটিভ সংখ্যাগুলো (Positive numbers) নিয়ে একটা নতুন অ্যারে রিটার্ন করবে।
// Input: [10, -5, 25, -2, 33, 5]
// Output: [10, 25, 33, 5]
// Hint: লুপ চালিয়ে চেক করো সংখ্যাটি number >= 0 কি না।
function dataCleaner (numbers){
      let cleanedValues = [];
      for (let number of numbers){
            if(number >= 0){
                  cleanedValues.push(number);
            }
      }
      return cleanedValues;
}
const badData = [10, -5, 25, -2, 33, 5];
const data = dataCleaner(badData);
console.log(data);