// Task 3: Calculate Average of Passed Students
// বিবরণ: ছাত্রদের নাম্বারের অ্যারে দেওয়া আছে। যারা ৩৩ বা তার বেশি পেয়েছে (Pass), শুধু তাদের নাম্বারের গড় (Average) বের করো।

// সতর্কতা: ১. প্রথমে যারা পাস করেছে তাদের নাম্বার যোগ করতে হবে। ২. গুনতে হবে কয়জন পাস করেছে (Count)। ৩. শেষে যোগফলকে পাস করা ছাত্রের সংখ্যা দিয়ে ভাগ দিতে হবে।

// Input: [50, 30, 80, 20, 90]

function passedStudents(marks) {
  let sum = 0;
  let count = 0;
  for (let mark of marks) {
    if (mark >= 33) {
      sum += mark;
      count++;
    }
  }
  let totalAverage = sum/count;
  return totalAverage;
}

const marks = [50, 30, 80, 20, 90];
const totalPassed = passedStudents(marks);
console.log(totalPassed);
