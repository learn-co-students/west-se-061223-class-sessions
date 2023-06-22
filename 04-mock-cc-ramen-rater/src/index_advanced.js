
// Global
const URL = "http://localhost:3000/ramens"
let selectedRamen;

// DOM Selectors
const ramenMenu = document.querySelector("#ramen-menu")
const detailImage = document.querySelector(".detail-image")
const name = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")
const editRamen = document.querySelector("#edit-ramen")

// Event listeners
newRamen.addEventListener('submit', addNewRamen)
editRamen.addEventListener('submit', updateRamen)

// Event handlers
function updateRamen(e){
    e.preventDefault()
    selectedRamen.rating = e.target.rating.value
    selectedRamen.comment = e.target["new-comment"].value
    renderRamenDetail(selectedRamen)
    editRamen.reset()
}

function addNewRamen(e){
    e.preventDefault()
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamenObj = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    // renderInMenu(newRamenObj) // optimistic rendering
    postRamen(newRamenObj).then(renderInMenu) // pessimistic rendering
    newRamen.reset()
}


// Fetches
fetch(URL)
  .then(response => response.json())
  .then((ramensArr) => {
    ramensArr.forEach((ramenObj) => {
        renderInMenu(ramenObj)
    })
    renderRamenDetail(ramensArr[0])
})

function postRamen(newRamenObj) {
    const config = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRamenObj)
    }
    return fetch(URL, config)
      .then(res => res.json())
}

function deleteRamen(id){
    fetch(URL + `/${id}`, {method: "DELETE"})
}

// Renders
function renderInMenu(ramenObj){
    // console.log('ramenObj: ', ramenObj);
    const div = document.createElement("div")
    const img = document.createElement('img');
    const btn = document.createElement('button')
    img.src = ramenObj.image
    btn.textContent = 'X'
    // console.log('ramenMenu: ', ramenMenu);
    div.append(img, btn)
    ramenMenu.append(div)
    img.addEventListener('click', () => renderRamenDetail(ramenObj))
    btn.addEventListener('click', () => {
        deleteRamen(ramenObj.id)
        div.remove()
    })
    
}

function renderRamenDetail(ramenObj){
    selectedRamen = ramenObj
    detailImage.src = ramenObj.image
    name.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    ratingDisplay.textContent = ramenObj.rating
    commentDisplay.textContent = ramenObj.comment
}

