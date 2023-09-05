import './style.css'
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  budget: 200,
  pets: [
    {id: 1, name: "Daisy", species: "dog"},
    {id: 2, name: "Felix", species: "cat"}
  ]
}

function reducer(currState = initialState, action){
  switch (action.type) {
    case "addTenDollars":
      return {
        ...currState,
        budget: currState.budget +=10
      }
    case "subtract":
      return {
        ...currState,
        budget: currState.budget -= action.payload
      }
    case "addPet":
      return {
        ...currState,
        pets: [...currState.pets, action.payload]
      }
    default:
      return currState

  }
}

const store = createStore(reducer)

store.subscribe(() => {
  const state = store.getState()
  const budgetH3 = document.querySelector('#budget')
  budgetH3.textContent = `Budget: $${state.budget}`
  const petsUl = document.querySelector('#pets')
  state.pets.forEach(p => {
    const li = document.createElement('li')
    li.textContent = `Name: ${p.name} | Species: ${p.species}`
    petsUl.appendChild(li)
  })
})

store.dispatch({ type: "addTenDollars"}) // => reducer(store.getState(), {action...})
console.log("🚀 ~ file: main.js:13 ~ store:", store.getState())

const addBtn = document.querySelector('#add10')
addBtn.addEventListener('click', () => store.dispatch({ type: "addTenDollars"}))

const subBtn = document.querySelector('#subtract')
subBtn.addEventListener('click', () => store.dispatch({ type: "subtract", payload: 5}))


