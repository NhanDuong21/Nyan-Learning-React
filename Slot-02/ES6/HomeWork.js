/**
 * PHẦN A PROMISE (CƠ BẢN)
Bài 1: Promise đơn giản
    Viết Promise:
    Sau 1 giây
    Trả về "Hello ES6"
    In kết quả ra console
    Gợi ý: dùng setTimeout, .then()
 */

let promiseWelcome = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

promiseWelcome.then((result) => console.log(result));

function promiseWelcome2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Helloooo");
    }, 1000);
  });
}
async function run() {
  let pm2 = await promiseWelcome2();
  console.log(pm2);
}
run();
/**
 * Bài 2: Promise thành công / thất bại
 Viết Promise:

    Random số từ 0 → 1
    Nếu < 0.7 → resolve "Success"
    Ngược lại → reject "Fail"

Yêu cầu:
    In "Success" nếu thành công
    In "Fail" nếu thất bại
 */

/**
 * Bài 3: Đoán kết quả (hay ra kiểm tra)
console.log("A");

new Promise(resolve => {
  setTimeout(() => {
    resolve("B");
  }, 1000);
}).then(result => console.log(result));

console.log("C");
 */

/**
 * Bài 4: then nối then

👉 Viết Promise:

Resolve số 5

.then() nhân 2

.then() cộng 3

In kết quả cuối cùng

📌 Kết quả mong đợi: 13
 */

/**
 * Bài 5: Chuyển Promise sang async/await

👉 Cho code Promise:

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1500);
  });
}


👉 Viết function async:

Gọi getData()

In kết quả ra console
 */

/**
 * Bài 6: Bắt lỗi với async/await

👉 Viết Promise:

Sau 1 giây

Reject "Something went wrong"

👉 Dùng async/await + try...catch

In lỗi ra console
 */

/**
 * Bài 7: Đoán kết quả
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);


👉 Thứ tự in ra?
 */

/**
 * Bài 8: Class cơ bản

👉 Tạo class Animal:

Thuộc tính: name

Method: speak() → in "Animal speaks"

👉 Tạo object và gọi method
 */

/**
 * Bài 9: Kế thừa class

👉 Tạo class Dog kế thừa Animal

Override speak() → "Dog barks"
 */

/**
 * Bài 10: Kết hợp class + Promise (xịn)

👉 Viết class User:

Thuộc tính: name

Method login():

Trả về Promise

Sau 1 giây → resolve "User logged in"

👉 Gọi login() và in kết quả
 */
