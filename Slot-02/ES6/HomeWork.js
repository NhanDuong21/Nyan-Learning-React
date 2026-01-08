// /**
//  * PHẦN A PROMISE (CƠ BẢN)
// Bài 1: Promise đơn giản
//     Viết Promise:
//     Sau 1 giây
//     Trả về "Hello ES6"
//     In kết quả ra console
//     Gợi ý: dùng setTimeout, .then()
//  */

// let promiseWelcome = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 1000);
// });

// promiseWelcome.then((result) => console.log(result));

// function promiseWelcome2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Helloooo");
//     }, 1000);
//   });
// }
// async function run() {
//   let pm2 = await promiseWelcome2();
//   console.log(pm2);
// }
// run();
// /**
//  * Bài 2: Promise thành công / thất bại
//  Viết Promise:

//     Random số từ 0 → 1
//     Nếu < 0.7 → resolve "Success"
//     Ngược lại → reject "Fail"

// Yêu cầu:
//     In "Success" nếu thành công
//     In "Fail" nếu thất bại
//  */
// let randomNumber = new Promise((resolve, reject) => {
//   let randomNum = Math.random(0, 1);
//   if (randomNum < 0.7) {
//     console.log(randomNum);
//     resolve("Success");
//   } else {
//     reject("Fail");
//   }
// });

// randomNumber
//   .then((result) => console.log(result))
//   .catch((errror) => console.log(errror));

// /**
//  * Bài 3: Đoán kết quả (hay ra kiểm tra)
// console.log("A");

// new Promise(resolve => {
//   setTimeout(() => {
//     resolve("B");
//   }, 1000);
// }).then(result => console.log(result));

// console.log("C");

// ====> cai nay ra C truoc roi 1s sau ra B
//  */

// /**
//  * Bài 4: then nối then

// 👉 Viết Promise:

// Resolve số 5

// .then() nhân 2

// .then() cộng 3

// In kết quả cuối cùng

// 📌 Kết quả mong đợi: 13
//  */

// let promiseThenToThen = new Promise((resolve) => {
//   resolve(5);
// });

// promiseThenToThen
//   .then((resolve1) => resolve1 * 2)
//   .then((resolve2) => resolve2 + 3)
//   .then((result) => console.log(result));
// /**
//  * Bài 5: Chuyển Promise sang async/await

// 👉 Cho code Promise:

// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 1500);
//   });
// }

// 👉 Viết function async:

// Gọi getData()

// In kết quả ra console
//  */

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 1500);
//   });
// }

// async function getDataa() {
//   let result = await getDataa();
//   console.log(result);
// }
// getData();
// /**
//  * Bài 6: Bắt lỗi với async/await

// 👉 Viết Promise:

// Sau 1 giây

// Reject "Something went wrong"

// 👉 Dùng async/await + try...catch

// In lỗi ra console
//  */

// function setTimeoutPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Something went wrong");
//     }, 1000);
//   });
// }

// async function handleError() {
//   try {
//     let result = await setTimeoutPromise();
//     console.log("Đây là resolve (Didnot to catch): ", result);
//   } catch (error) {
//     console.log("Đây là reject ( jumping to catch: ", error);
//   }
// }

// handleError();

// /**
//  * Bài 7: Đoán kết quả
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// 👉 Thứ tự in ra?

// 1 3 2
//  */

// /**
//  * Bài 8: Class cơ bản

// 👉 Tạo class Animal:

// Thuộc tính: name

// Method: speak() → in "Animal speaks"

// 👉 Tạo object và gọi method
//  */
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name}`);
//   }
// }
// let animal = new Animal("Animal speaks");
// animal.speak();
// /**
//  * Bài 9: Kế thừa class

// 👉 Tạo class Dog kế thừa Animal

// Override speak() → "Dog barks"
//  */

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }
// let dog = new Dog("Dog barks");
// dog.speak();
// /**
//  * Bài 10: Kết hợp class + Promise (xịn)

// 👉 Viết class User:

// Thuộc tính: name

// Method login():

// Trả về Promise

// Sau 1 giây → resolve "User logged in"

// 👉 Gọi login() và in kết quả
//  */
class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("User logged in");
      }, 1000);
    });
  }
}
let userrr = new User("Nyan");
userrr.login().then((result) => console.log(result));
