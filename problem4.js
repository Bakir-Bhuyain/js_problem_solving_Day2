// ask 4: Is "JavaScript" Here?
// তোমার লজিক ক্লিয়ার করার জন্য এবার এই সহজ টাস্কটা করে পাঠাও।

// বিবরণ: একটা অ্যারেতে বইয়ের নাম আছে। লুপ চালিয়ে দেখো "JavaScript" আছে কি না।

// ইনপুট: ['Python', 'Java', 'C++', 'JavaScript', 'Go']

// আউটপুট: true (পেলে true, না পেলে false)

// Hint: if (book === 'JavaScript') হলে return true করে দাও।
function isHere(values) {
  let book = "";
  for (let value of values) {
    if (value === "JavaScript") {

      return true;
    }
  }
  return false;
}

const books = ["Python", "Java", "C++", "JavaScript", "Go"];
const findBook = isHere(books);
console.log(findBook);
