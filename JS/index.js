
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

 const demonSlayer = [
    {
        name: "Tanjiro Kamado",
        gender: "Male",
        powers: "Water Breathing, Hinokami Kagura",
        age: 15
    },
    {
        name: "Nezuko Kamado",
        gender: "Female",
        powers: "Demon Blood Art, Regeneration",
        age: 14
    },
    {
        name: "Zenitsu Agatsuma",
        gender: "Male",
        powers: "Thunder Breathing",
        age: 16
    },
    {
        name: "Inosuke Hashibira",
        gender: "Male",
        powers: "Fire Breathing",
        age: 15
    },
    {
        name: "Kanao Tsuyuri",
        gender: "Female",
        powers: "Wind Breathing",
        age: 16
    },
    {
        name: "Muzan Kibutsuji",
        gender: "Male",
        powers: "Demon Blood Art, Regeneration",
        age: 1000
    },
    {
        name: "Kokushibo",
        gender: "Male",
        powers: "Demon Blood Art, Regeneration",
        age: 1000
    }
]

const name=demonSlayer.map((demonSlayer)=>{
  return demonSlayer.name
})
console.log(name)

const filteredName=demonSlayer.filter((demonSlayer)=>{
  return demonSlayer.gender
})
console.log(filteredName)



// 1. Reverse an array without using reverse()
function reverseArray(arr) {
  const reversed = [];  // Creates an empty array to store the reversed elements
  for (let i = arr.length - 1; i >= 0; i--) { //This loop goes through the array from the last element to the first, allowing you to process the array in reverse order.
    reversed.push(arr[i]);  //Adds the current element to the reversed array
  }
  return reversed; //Return the new array with elements in reverse order
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]


// 2. Find the maximum number in an array
function findMax(arr) {
  if (arr.length === 0) return undefined; //If the array is empty, return undefined 
  let max = arr[0];   // Assume the first element is the maximum to start
  for (let num of arr) { // Loop through each element in the array
    if (num > max) max = num;  // If the current element is greater than max, update max
  }
  return max;
}

console.log(findMax([5, 10, 3, 7])); // 10


// 3. Remove duplicates from an array
function removeDuplicates(arr) {
  const uniqueElements = [];
  for (let item of arr) {    //Loop through each element in the array
    if (!uniqueElements.includes(item)) {   //If the element is not already in uniqueElements
      uniqueElements.push(item);   //Add it to uniqueElements
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]


// 4. Flatten a multi-dimensional array (one level deep)
function flattenArray(arr) {
  const flat = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        flat.push(subItem);
      }
    } else {
      flat.push(item);
    }
  }
  return flat;
}

// 5. Count occurrences of a value in an array
function countOccurrences(arr, value) {
  let count = 0;
  for (let item of arr) {
    if (item === value) count++;
  }
  return count;
}







//console.log(flattenArray([1, [2, 3], 4, [5]])); // [1, 2, 3, 4, 5]

//console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3