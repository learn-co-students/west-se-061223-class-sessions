

// Fetches

function getAllMovies(url){
    return fetch(url)
    .then(res => res.json())
}

// Render functions
const nav = document.querySelector('#movie-list')

function renderInNav(movieObj){
    const img = document.createElement('img')
    console.log("🚀 ~ file: index.js:14 ~ renderInNav ~ img:", img)
    img.src = movieObj.image
    nav.append(img)
}


// Intializers

getAllMovies('http://localhost:3000/movies')
 .then(movieArr => {
    console.log(movieArr)
    movieArr.forEach(renderInNav)
})

