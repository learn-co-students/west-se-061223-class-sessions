// Global constants
const URL = "http://localhost:3000/menu"
let currentDish;

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

function updateDish(url, dishObj){
    const config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dishObj)
    }
    return fetch(url + `/${dishObj.id}`, config)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw "Failed to update the cart!"
            }
        })
}

// Event listeners
form.addEventListener('submit', addToCart)

// Event handlers 
function addToCart(event) {
    event.preventDefault()
    const numToAdd = Number(document.querySelector('#cart-amount').value)
    console.log("🚀 ~ file: index.js:27 ~ addToCart ~ numToAdd:", numToAdd)
    currentDish.number_in_bag += numToAdd
    // let currCart = parseInt(numberInCart.textContent)
    // numberInCart.textContent = currCart += numToAdd
    // numberInCart.textContent = currentDish.number_in_bag // optimistic
    updateDish(URL, currentDish)
        .then(updatedDish => {
            renderDetail(updatedDish)
            return getAllDishes(URL)
        })
        .then(displayTotal)
    form.reset()
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
    currentDish = dishObj
    // console.log("🚀 ~ file: index.js:25 ~ renderDetail ~ dishObj:", dishObj)
    dishImage.src = dishObj.image
    dishName.textContent = dishObj.name
    dishDescription.textContent = dishObj.description
    dishPrice.textContent = dishObj.price
    numberInCart.textContent = dishObj.number_in_bag
}

function displayTotal(dishArr){
    let hr = document.createElement('hr')
    const h3 = document.createElement('h3')
    h3.textContent = 'Order total:'
    const span = document.createElement('span')
    h3.append(span)
    document.querySelector('#dish').append(hr, h3)
    const currTotal = dishArr.reduce((sum, dish) => sum + (dish.price * dish.number_in_bag), 0)
    span.textContent = currTotal
}

// Initializer
getAllDishes(URL)
  .then(dishArr => {
    displayTotal(dishArr)
    dishArr.forEach(renderInMenu);
    renderDetail(dishArr[0]);
  })