/**
 * Using ES6 and JSX
Do all requires that based on the variable as below
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
Find the first person off the people array is teenager (age >=10 and age <=20)
Find the all person of the people array is teenager (age >=10 and age <=20)
Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.

 */
var people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

const isTeenager = (teenager) => teenager.age >= 10 && teenager.age <= 20;

const firstTeenager = people.find(isTeenager);
console.log(firstTeenager);

const allIsTeenager = (teen) => teen.age >= 10 && teen.age <= 20;
const allTeenager = people.filter(allIsTeenager);
console.log(allTeenager);

const checkTeenager = people.every(isTeenager);
console.log(checkTeenager);

const checkTeen = people.some(isTeenager);
console.log(checkTeen);
