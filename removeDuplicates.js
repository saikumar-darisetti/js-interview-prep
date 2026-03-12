function removeDuplicates(arr) {

  if (arr.length === 0) {
    return []
  }

  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!filteredArray.includes(arr[i])) {
      filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6]));
console.log(removeDuplicates([10, 15, 20, 25, 30, 30, 30]));
module.exports = removeDuplicates;
