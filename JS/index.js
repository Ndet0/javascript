
 function division(num1,num2){
    console.log(num1/num2)
 }
  division(10,100)
  division(100,1000)

function innerFunction() {
  console.log("My name is Festus");
}
function outerFunction() {
  console.log("Hey");
  innerFunction(); // Call the inner function inside the outer function
}
outerFunction();

let x = 5;
let y = 6;
let sum = x + y;

console.log(sum)

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(inputArray);
console.log(evenNumbers); // Output: [2, 4, 6]

function sortByProperty(arr, property) {
  return [...arr].sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
}

const objectArry = [
  { name: 'Fred', gender: 'Male', age: 23 },
  { name: 'Emmanuel', gender: 'Male', age: 20 },
  { name: 'Valentine', gender: 'Female', age: 16 }
];

const sortedByAge = sortByProperty(objectArry, 'age');
console.log(sortedByAge);

function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const inpatArray = [1, 2, 3, 4, 5];
const totalSum = sumArray(inpatArray);
console.log(totalSum); // Output: 15

function extractRange(arr, startIndex, endIndex) {
  return arr.slice(startIndex, endIndex + 1);
}
const vowels = ['a', 'e', 'i', 'o', 'u'];
const range = extractRange(vowels, 1, 3);
console.log(range); // Output: ['e', 'i', 'o']

const items=[
  {name:'bike',price:'100'},
  {name:'Tv',price:'200'},
  {name:'Album',price:'10'},
  {name:'book',price:'5'},
  {name:'phone',price:'500'},
  {name:'computer',price:'1000'},
  {name:'ketyboard',price:'25'}
]
 const filteredItems=items.filter((item)=>{
  return item.price<=100
 })

 console.log(filteredItems)


 const itemNames=items.map((item)=>{
  return item.name
 })
  console.log(itemNames)
 const itemNimes=items.map((item)=>{
  return item.price
 })
 console.log(itemNimes)

 const itemFind=items.find((item)=>{
  return item.name==='book'
 })

 console.log(itemFind)


 items.forEach((item)=>{
  console.log(item.price)
 })



 items.forEach((item)=>{
  console.log(item.name)
 })



 const hasInexpensiveItems=items.some((item)=>{
  return item.price<=100
 })

 console.log(hasInexpensiveItems)
 
const hasExpensiveItems=items.every((item)=>{
  return item.price>=500
 })

 console.log(hasExpensiveItems)
