// Globals
const baseURL = "http://localhost:3000";

// DOM selectors
const menu = document.querySelector('#ramen-menu')

// Fetch functions
function getRamen(url) {
  return fetch(url).then((r) => r.json());
}

// Event listeners

// Event handlers

// Render function
function renderAllRamen(ramenArr){
    ramenArr.forEach(renderInMenu)
}

function renderInMenu(ramenObj) {
//   console.log("🚀 ~ file: index.js:20 ~ renderInMenu ~ ramenObj:", ramenObj);
    const img = document.createElement("img");
    // console.log("🚀 ~ file: index.js:24 ~ renderInMenu ~ img:", img)
    img.src = ramenObj.image
    menu.append(img)
}

// Initializers
getRamen(baseURL + `/ramens`).then((ramenArr) => {
  // ramenArr.forEach(ramen => renderInMenu(ramen));
//   ramenArr.forEach(renderInMenu);
    renderAllRamen(ramenArr)
});
