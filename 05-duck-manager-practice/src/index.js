// ## Deliverable One

// When the page loads, fetch the ducks and display each duck image in the `#duck-nav`. You may need to do something to make sure your `script` tag is working in the HTML first...

// ## Deliverable Two

// When a user clicks one of the duck images, it shows the duck's name, the image, and a likes button with the number of likes in the `#duck-display`like so:
// If another image is clicked in the `#duck-nav` it replaces the previous name, image, and button with the proper content.

// ## Deliverable Three

// When the likes button is clicked, it increments the number of likes displayed for that duck. Be sure that the button continues to read "X likes".

// ## Deliverable Four

// When the `#new-duck-form` is submitted, it generates a new duck image in the `#duck-nav`. When clicked, it acts like the other images in the `#duck-nav` and shows a name, image, and like button in the `#duck-display`. No persistence is needed. A duck starts with 0 likes.

// MANTRA
// 1. FETCH the data
// 2. SELECT the DOM element(s)
// 3. CREATE elements if needed
// 4. ASSIGN data to the elements
// 5. APPEND elements into DOM

// Global vars
const URL = "http://localhost:3000/ducks";

// DOM Selectors
const duckNav = document.querySelector("#duck-nav");
console.log("🚀 ~ file: index.js:30 ~ duckNav:", duckNav);

// Fetch functions
function getDucks(url) {
  return fetch(url).then((response) => response.json());
}

// Event listeners

// Event handlers

// Render functions
function renderAllDucksInNav(duckArr) {
  // console.log("🚀 ~ file: index.js:44 ~ renderAllDucksInNav ~ duckArr:", duckArr)
  duckArr.forEach(renderOneDuckInNav);
}

function renderOneDuckInNav(duckObj) {
//   console.log(
//     "🚀 ~ file: index.js:49 ~ renderOneDuckInNav ~ duckObj:",
//     duckObj
//   );
  const duckImage = document.createElement('img')
  duckImage.src = duckObj.img_url
  console.log("🚀 ~ file: index.js:53 ~ renderOneDuckInNav ~ duckImage:", duckImage)
    duckNav.append(duckImage)
}

// Initializers
getDucks(URL).then((duckArr) => renderAllDucksInNav(duckArr));
