// Globals
const baseURL = "http://localhost:3000";
let selectedRamen;

// DOM selectors
const menu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector(".detail-image");
// console.log("🚀 ~ file: index.js:7 ~ detailImage:", detailImage)
const ramenName = document.querySelector(".name");
const restaurant = document.querySelector(".restaurant");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");
const newRamen = document.querySelector("#new-ramen");
const editRamen = document.querySelector("#edit-ramen");
// console.log("🚀 ~ file: index.js:13 ~ newRamen:", newRamen)

// Fetch functions
function getRamen(url) {
  return fetch(url).then((r) => r.json());
}

// Event listeners
newRamen.addEventListener("submit", (e) => handleNewRamen(e));
editRamen.addEventListener('submit', handleEditRamen)

// Event handlers
function handleNewRamen(e) {
  e.preventDefault();
  console.log("🚀 ~ file: index.js:25 ~ handleNewRamen ~ e:", e.target);
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  renderInMenu(newRamen);
  e.target.reset()
}

function handleEditRamen(e) {
    e.preventDefault();
    console.log(e.target)
    selectedRamen.rating = e.target.rating.value
    selectedRamen.comment = e.target["new-comment"].value
    renderRamenDetail(selectedRamen)
    e.target.reset()
}

// Render function
function renderAllRamen(ramenArr) {
  ramenArr.forEach(renderInMenu);
}

function renderInMenu(ramenObj) {
  //   console.log("🚀 ~ file: index.js:20 ~ renderInMenu ~ ramenObj:", ramenObj);
  const img = document.createElement("img");
  const div = document.createElement("div");
  const btn = document.createElement("button");
  btn.textContent = "X";
  div.append(img, btn);
  // console.log("🚀 ~ file: index.js:24 ~ renderInMenu ~ img:", img)
  img.src = ramenObj.image;
  img.addEventListener("click", () => renderRamenDetail(ramenObj));
  btn.addEventListener("click", () => {
    div.remove();
    // const nextToDisplay =   wonky behavior
    //   ramenObj.id - 1 > 0 ? ramenObj.id - 1 : ramenObj.id + 1;
    // getRamen(baseURL + `/ramens/${nextToDisplay}`).then(renderRamenDetail);
  });
  menu.append(div);
}

function renderRamenDetail(ramenObj) {
  console.log(
    "🚀 ~ file: index.js:31 ~ renderRamenDetail ~ ramenObj:",
    ramenObj
  );
  selectedRamen = ramenObj
  detailImage.src = ramenObj.image;
  ramenName.textContent = ramenObj.name;
  restaurant.textContent = ramenObj.restaurant;
  ratingDisplay.textContent = ramenObj.rating;
  commentDisplay.textContent = ramenObj.comment;
}

// Initializers
getRamen(baseURL + `/ramens`).then((ramenArr) => {
  // ramenArr.forEach(ramen => renderInMenu(ramen));
  //   ramenArr.forEach(renderInMenu);
  renderAllRamen(ramenArr);
});
getRamen(baseURL + `/ramens/1`).then(renderRamenDetail)
