function countEvenNumbers(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isFinite(arr[i]) && typeof arr[i] !== "Number") {
      return false;
    }
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i]) && arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([10, 15, 20, 25, 30]));
