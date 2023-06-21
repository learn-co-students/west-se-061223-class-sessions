// Global constants
const URL = "http://localhost:3000/menu"

// DOM Selectors
const menu = document.querySelector('#menu-items')
// Fetch fuctions
function getAllDishes(url){
    return fetch(url)
      .then(res => res.json())
}

// Event listeners

// Event handlers 

// Render functions
function renderInMenu(dishObj){
    console.log("🚀 ~ file: index.js:18 ~ renderInMenu ~ dishObj:", dishObj)
    const span = document.createElement("span");
    span.textContent = dishObj.name;
    menu.append(span)
}

// Initializer
getAllDishes(URL)
  .then(dishArr => {
    dishArr.forEach(renderInMenu);
  })