1. ES6 là gì?

ES6 (ECMAScript 2015) là phiên bản nâng cấp lớn của JavaScript, bổ sung nhiều cú pháp và tính năng mới giúp:
    Code ngắn gọn hơn
    Dễ đọc – dễ bảo trì
    Hỗ trợ lập trình hiện đại (OOP, async, module…)

2. Các tính năng chính của ES6
2.1 Arrow Functions (Hàm mũi tên)

Viết hàm ngắn gọn hơn và không tạo this riêng.

// ES5
function sum(a, b) {
  return a + b;
}

// ES6
const sum = (a, b) => a + b;

2.2 let và const (Block-scoped)

let: biến có thể thay đổi

const: hằng số (không gán lại được)

Phạm vi trong { } (block scope)

let age = 20;
const PI = 3.14;

2.3 Rest Parameter (...)

Gộp nhiều tham số thành một mảng.

function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

total(1, 2, 3, 4); // 10

2.4 Destructuring Assignment

Tách dữ liệu từ array/object nhanh chóng.

// Array
const [a, b] = [10, 20];

// Object
const user = { name: "An", age: 22 };
const { name, age } = user;

2.5 Default Parameters

Tham số mặc định khi không truyền giá trị.

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest

2.6 Template Literals (Template Strings)

Dùng dấu ` để nối chuỗi dễ hơn.

const name = "An";
const age = 22;

console.log(`My name is ${name}, I am ${age} years old`);

2.7 Promises – Sync & Async

Giải quyết bất đồng bộ (callback hell).

const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(result => console.log(result));


Async / Await (ES8 nhưng học chung ES6)

async function fetchData() {
  const result = await promise;
  console.log(result);
}

2.8 Classes

Hỗ trợ lập trình hướng đối tượng.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("An", 22);
p1.sayHello();

3. Ghi nhớ nhanh cho slot học

ES6 = JavaScript hiện đại

Quan trọng nhất:
let/const – arrow function – destructuring – template string – promise – class

Học xong là viết code gọn hơn hẳn ES5