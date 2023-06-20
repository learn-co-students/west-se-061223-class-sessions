// Globals
let selectedMovie;

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
const watched = document.querySelector('#watched')


function renderInNav(movieObj){
    const img = document.createElement('img')
    img.src = movieObj.image
    img.addEventListener('click', () => renderDetail(movieObj))
    nav.appendChild(img)
}

function renderDetail(movieObj){
    selectedMovie = movieObj
    title.textContent = movieObj.title
    description.textContent = movieObj.description
    detailImage.src = movieObj.image
    let watchVal = movieObj.watched ? "Watched" : "Unwatched"
    watched.textContent = watchVal
    yearReleased.textContent = movieObj.release_year
}

// Event listeners and handlers

watched.addEventListener('click', toggleWatched);

function toggleWatched(){
    selectedMovie.watched = !selectedMovie.watched
    if (selectedMovie.watched) {
        watched.textContent = "Watched"
    } else {
        watched.textContent = "Unwatched"
    }
}


// Intializers

getAllMovies('http://localhost:3000/movies')
 .then(movieArr => {
    console.log(movieArr)
    // movieArr.forEach(movie => renderInNav(movie))
    movieArr.forEach(renderInNav) // shorthand for above
    renderDetail(movieArr[0])
})

