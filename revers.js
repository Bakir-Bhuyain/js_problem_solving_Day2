const learning = ["i am learning web development"];
function reversing(values) {
  let reversString = "";
  for (let i = values.length - 1; i >= 0; i--) {
    reversString += values[i];
  }
  return reversString;
}
console.log(reversing(learning[0]));



const myProfile ={
      name : 'bakir',
      age : 25,
      skill : ['html', 'css', 'tailwindcss', 'javaScript'],
      isHardWorking : true
}
console.log(myProfile)
myProfile.name = 'salam';
console.log(myProfile);
myProfile.age= 26;
myProfile.location = 'Bangladesh';
myProfile.skill[2]

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  {id: 3 , name: "tablet", price :15000}
];
console.log(products)