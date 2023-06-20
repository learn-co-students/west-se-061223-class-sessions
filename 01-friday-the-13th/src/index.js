

// Fetches

function getAllMovies(url){
    return fetch(url)
    .then(res => res.json())
}

// Render functions
const nav = document.querySelector('#movie-list')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const detailImage = document.querySelector("#detail-image")
const yearReleased = document.querySelector('#year-released')


function renderInNav(movieObj){
    const img = document.createElement('img')
    img.src = movieObj.image
    nav.appendChild(img)
}

function renderDetail(movieObj){
    title.textContent = movieObj.title
    description.textContent = movieObj.description
    detailImage.src = movieObj.image
    yearReleased.textContent = movieObj.release_year
}


// Intializers

getAllMovies('http://localhost:3000/movies')
 .then(movieArr => {
    console.log(movieArr)
    movieArr.forEach(renderInNav)
    renderDetail(movieArr[0])
})

