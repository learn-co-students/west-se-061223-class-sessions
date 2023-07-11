// function isPalindrome(word) {
//   // Write your algorithm here
//   return reverseWord(word) === word
// }

function isPalindrome(word){
  for (let i=0; i < word.length/2; i++){
    console.log("🚀 ~ file: index.js:9 ~ isPalindrome ~ i:", i)
    console.log("🚀 ~ file: index.js:9 ~ isPalindrome ~ word[i]:", word[i])
    console.log("🚀 ~ file: index.js:9 ~ isPalindrome ~ word[word.length - 1 - i]:", word[word.length - 1 - i])
    if (word[i] !== word[word.length - 1 - i]){
      return false
    }
  }
  return true
}

function reverseWord(string){
  // const wordArr = string.split('')
  // wordArr.reverse()
  // return wordArr.join('')
  return string.split('').reverse().join('')
}


/* 
  Add your pseudocode here
  take the given word and reverse it
    - convert the string to an array
    - reverse the array
    - reassemble the array into a string
  compare the original word to the reverse word
  return true if they match, false if they don't
*/

/*
compare the first character in the given string to the last character
   - if not a match, return false
if they match, then compare the 2nd char with 2nd from end, etc.
if all characters match, return true
0 1 2 3 4 5 6 
r a c e c a r
i = 1
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
