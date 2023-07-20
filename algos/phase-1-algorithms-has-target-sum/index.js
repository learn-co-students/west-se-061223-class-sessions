// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) { return true }
//     }
//   }
//   return false
// }

// O(n) linear
function hasTargetSum(array, target) {
  const seenNums = {}
  for (const num of array) {
    const complement = target - num;
    if (seenNums[complement]) return true
    seenNums[num] = true
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
  O(n^2) quadratic
*/

/* 
  Add your pseudocode here
  iterate through array
     take 1st num
     iterate with another loop
     add nums from this iterator to 1st num
     if sum equals target return True
    next iteration
  if no sums match target, return False


  create an object to keep track of all the seen numbers
  iterate over the arra
    for the curr num, calc the complement
    check if any keys in the object are the complement
      if so, return true
    save the curr num as a key in our object for future checks
  if we reach the end, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
