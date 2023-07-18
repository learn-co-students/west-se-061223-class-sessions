// What is the Big-O of the following algos?

const laundry = ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];

// O(1) constant
function printFirstItem(items){
    console.log(items[0])
}

// O(n) linear
function printAllItems(items){
    items.forEach(item => console.log(item))
}

// O(n^2) quadratic
function printAllPossibleOrderedPairs(items){
    items.forEach(firstItem => {
        items.forEach(secondItem => console.log(firstItem, secondItem))
    })
}
// printAllPossibleOrderedPairs(laundry)

// Is N the actual input value, or *size* of the input?

// O(n) linear
function sayHiNTimes(n){
    for (let i = 0; i < n; i++){
        console.log("HI")
    }
}
sayHiNTimes(25)

// Drop constants
// O(2n) => O(n) linear
function printAllItemsTwice(items) {
    items.forEach((item) => {
      console.log(item);
    });
  
    // Once more, with feeling
    items.forEach((item) => {
      console.log(item);
    });
}

// Drop lesser terms
// O(n + n^2) => O(n^2) quadratic
 function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach((number) => {
      console.log(number);
    });
  
    console.log("and these are their sums:");
    numbers.forEach((firstNumber) => {
      numbers.forEach((secondNumber) => {
        console.log(firstNumber + secondNumber);
      });
    });
}

// Always describe worst case
// O(n) linear
function contains(haystack, needle){
    for (let i = 0; i < haystack.length; i++){
      if (haystack[i] == needle) {
        return true
      }
    }
    return false
}

// Space complexity

// O(1) constant
function sayHiNTimes(n) {
    for (let i = 0; i < n; i++) {
      console.log("hi");
    }
}
sayHiNTimes(30)

// O(1) constant (technically O(2))
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

// O(1 + n) => O(n) linear
function arrayOfHiNTimes(n) {
    const hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
}
arrayOfHiNTimes(25)

// O(1) constant
function getLargestItem(items) {
    let largest = -Number.MAX_VALUE;
    items.forEach((item) => {
      if (item > largest) {
        largest = item;
      }
    });
    return largest;
}
  