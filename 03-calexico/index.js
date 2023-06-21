// Global constants
const URL = "http://localhost:3000/menu"

// DOM Selectors
const menu = document.querySelector('#menu-items')
const dishImage = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDescription = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const numberInCart = document.querySelector('#number-in-cart')
const form = document.querySelector('#cart-form')

// Fetch fuctions
function getAllDishes(url){
    return fetch(url)
      .then(res => res.json())
}

// Event listeners
form.addEventListener('submit', addToCart)

// Event handlers 
function addToCart(event) {
    event.preventDefault()
    const numToAdd = Number(document.querySelector('#cart-amount').value)
    console.log("🚀 ~ file: index.js:27 ~ addToCart ~ numToAdd:", numToAdd)
    let currCart = Number(numberInCart.textContent)
    numberInCart.textContent = currCart += numToAdd
}

// Render functions
function renderInMenu(dishObj){
    // console.log("🚀 ~ file: index.js:18 ~ renderInMenu ~ dishObj:", dishObj)
    const span = document.createElement("span");
    span.textContent = dishObj.name;
    span.addEventListener('click', () => renderDetail(dishObj))
    menu.append(span)
}

function renderDetail(dishObj){
    // console.log("🚀 ~ file: index.js:25 ~ renderDetail ~ dishObj:", dishObj)
    dishImage.src = dishObj.image
    dishName.textContent = dishObj.name
    dishDescription.textContent = dishObj.description
    dishPrice.textContent = dishObj.price
    numberInCart.textContent = dishObj.number_in_bag
}

// Initializer
getAllDishes(URL)
  .then(dishArr => {
    dishArr.forEach(renderInMenu);
    renderDetail(dishArr[0]);
  })