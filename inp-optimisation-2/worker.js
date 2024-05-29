onmessage = function (e) {
  const number = e.data;
  const result = fibonacci(number);
  postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
