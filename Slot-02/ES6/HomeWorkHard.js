/**
 * LEVEL NÂNG CAO 🚀
Bài 11: Promise + nhiều điều kiện

👉 Viết Promise mô phỏng đăng nhập:

Sau 1.5 giây

Nếu username === "admin" và password === "123456"
→ resolve "Login success"

Ngược lại → reject "Invalid account"

📌 Test cả 2 trường hợp đúng & sai.
 */
let loggedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let username = "admin";
    let password = "123456";
    if (username === "admin" && password === "123456") {
      resolve("Login success");
    } else {
      reject("Invalid account");
    }
  }, 1500);
});
loggedPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/**
   * Bài 12: Promise chaining có reject

👉 Viết Promise:

Resolve số 10

👉 Chuỗi .then():

Chia cho 2

Nếu kết quả < 10 → throw "Too small"

Nếu ok → nhân 3

👉 Bắt lỗi bằng .catch()
   */
let promiseChainingReject = new Promise((resolve, reject) => {
  resolve(10);
});

promiseChainingReject
  .then((result) => {
    let ketQua = result / 2;
    if (ketQua < 10) {
      throw "Too small";
    }
    return ketQua;
  })
  .then((value) => {
    return value * 3;
  })
  .then((finalValue) => console.log(finalValue))
  .catch((err) => console.log(err));

/**
 * Bài 13: Promise.all (rất hay hỏi)

👉 Viết 3 Promise:

  P1 resolve "A" sau 1 giây
  P2 resolve "B" sau 2 giây
  P3 resolve "C" sau 3 giây

👉 Dùng Promise.all:

In kết quả cuối cùng

📌 Gợi ý kết quả: ["A","B","C"]
 */
const P1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 1000);
});

const P2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 2000);
});

const P3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");
  }, 3000);
});

Promise.all([P1, P2, P3]).then((value) => console.log(value));

/**
 * Bài 14: Promise.race

👉 Dùng lại P1, P2, P3 ở bài trên
👉 Dùng Promise.race
👉 In kết quả

📌 Câu hỏi: Promise nào thắng? Vì sao?
 */
Promise.race([P1, P2, P3]).then((value) => console.log(value)); //P1 thắng vì P1 đc xử lý sớm hơn ( 1s)

/**
 * Bài 15: async/await + loop (dễ sai)

👉 Viết function async:

Chạy vòng for
Mỗi vòng:
Chờ 1 Promise (1 giây)
In số vòng hiện tại

📌 Yêu cầu: in đúng thứ tự, không in cùng lúc
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  for (let i = 1; i <= 5; i++) {
    await delay(1000);
    console.log(i);
  }
}

run();
