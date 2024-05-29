function calculateFibonacci() {
  const number = parseInt(document.getElementById('inputNumber').value);
  let result;

  if (number < 0) {
    result = 'Please enter a non-negative number.';
  } else {
    result = fibonacci(number);
  }

  document.getElementById('result').innerText = `Fibonacci result: ${result}`;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// const worker = new Worker('worker.js');

// worker.onmessage = function (e) {
//   const result = e.data;
//   document.getElementById('result').innerText = `Fibonacci result: ${result}`;
// };

// function calculateFibonacci() {
//   const number = parseInt(document.getElementById('inputNumber').value);
//   if (number < 0) {
//     document.getElementById('result').innerText = 'Please enter a non-negative number.';
//   } else {
//     worker.postMessage(number);
//   }
// }

function other() {
  document.getElementById('other').innerText = 'That took a while, did it not? 🤔';
}
