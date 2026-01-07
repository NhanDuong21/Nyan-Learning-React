/**
 * 2. Các tính năng chính của ES6
2.1 Arrow Functions (Hàm mũi tên)

Viết hàm ngắn gọn hơn và không tạo this riêng.
 */

//ES5
function sum(a, b) {
  return a + b;
}

//ES6
const sum = (a, b) => a + b;
const checkPositiveNumber = (num) => num > 0 && num % 1 == 0;

/**
 * 2.2 let và const (Block-scoped)

let: biến có thể thay đổi

const: hằng số (không gán lại được)

Phạm vi trong { } (block scope)
 */

let age = 20;
const PI = 3.14;

/**
 * 2.3 Rest Parameter (...)

Gộp nhiều tham số thành một mảng.
 */

function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

total(1, 2, 3, 4); // 10

/**
 * 2.4 Destructuring Assignment

Tách dữ liệu từ array/object nhanh chóng.
 */

// Array
const [a, b] = [10, 20];

// Object
const user = {
  name: "An",
  age: 22,
};
const { name, age } = user;

/**
 * 2.5 Default Parameters

Tham số mặc định khi không truyền giá trị.
 */

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest

/**
 * 2.6 Template Literals (Template Strings)

Dùng dấu ` để nối chuỗi dễ hơn.
 */

const name = "An";
const age = 22;

console.log(`My name is ${name}, I am ${age} years old`);

/**
 * 2.7 Promises – Sync & Async

Giải quyết bất đồng bộ (callback hell).
1. Promise là gì? (Hiểu bản chất trước)

 - Promise dùng để xử lý bất đồng bộ. Những việc không có kết quả ngay lập tức như:

        Gọi API
        Đọc file
        SetTimeout
        Gửi request lên server

 Ví dụ đời thường
 Mày gọi trà sữa:
    Nhân viên hứa sẽ làm → Promise
    Làm xong → thành công (resolve)
    Hết trân châu → thất bại (reject)
 */
// cấu trúc promise
const myPromise = new Promise((resolve, reject) => {
  // xử lý
});

// ví dụ

const buyMilkTea = new Promise((resolve, reject) => {
  let hasMoney = true;
  if (hasMoney) {
    resolve("Có tiền mua trà sữa");
  } else {
    reject("Không có tiền");
  }
});

buyMilkTea
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    console.log(`số random là: ${randomNum}`);
    if (randomNum < 0.5) {
      resolve("true");
    } else {
      reject("Error");
    }
  }, 5000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/**
 * 2. Promise chaining (then nối then)
 */

const promiseChaining = new Promise((resolve, reject) => {
  resolve(3);
});
// mỗi .then nhận kết quả của then ở trước
promiseChaining
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((result) => console.log(result)); //18

const anotherPromise = new Promise((resolve, reject) => {
  resolve("Another");
});

anotherPromise
  .then((result) => {
    console.log(result);
    return "Chained promise";
  })
  .then((result) => {
    console.log(result);
  });

//Handling Promises
const myPromise = new Promise((resolve, reject) => {
  let hasExperience = true;
  setTimeout(() => {
    if (hasExperience) {
      console.log("có kinh nghiệm");
    } else {
      console.log("ko có kinh nghiệm");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Success: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

promise.all cho phép xử lý nhiều promise cùng 1 lúc và chờ tất cả hoàn thành trc khi tiếp tục
nếu bất kì promise nào trong mảng bị từ chối thì promise.all cũng sẽ bị từ chối với lý do của promise đầu tiên bị từ chối
ví dụ get user information

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User infor");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Avatar");
  }, 1000);
});

Promise.all([promise1, promise2]).then((value) => {
  console.log(value);
});

//cách viết khác của promise là async/await (cleaner syntax)
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All User Infor");
    }, 3000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("get succesfull avatar");
    }, 1000);
  });
}

async function run() {
  const pm1 = await promise1();
  const pm2 = promise2();
  console.log("Start");
  console.log(pm1);
  console.log("End");
}

run();

/**
 * 5. Class trong ES6

 Class = khuôn mẫu để tạo object
 */
// ví dụ không dùng class ( ES5 )

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//ví dụ dùng class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
const ps = new Person("Nhân", 22);
ps.sayHi();

// kế thừa

class Student extends Person {
  constructor(name, age, mssv) {
    super(name, age);
    this.mssv = mssv;
  }
}
