## Core Deliverables
As a user, I can:
1. See all ramen images in menu on page load
  - [x] fetch the ramen data from the server
  - [x] iterate the ramen array (**forEach**)
  - [x] create <img> for each ramen
  - [x] assign the src of each <img> from the ramen obj
  - [x] select menu element from DOM (anchor)
  - [x] append <img> to menu
2. Click on a menu img to see the details of that ramen shown in detail section
  - [x] add event listeners to <img> in menu
  - [x] handle events by calling a detail render function
  - [x] select appropriate elements
  - [x] assign data to those elements from ramen obj
3. Submit a form to create a new ramen in the menu (no persistence)
  - [x] select the form
  - [x] add event listener to form
  - [x] handle submit event with callback fn
  - [x] preventDefault()
  - [x] get values from each input (via the event OR selector)
  - [x] create new ramenObj with values from form
  - [x] call render fn passing new ramenObj

## Advanced deliverables

## Extra advanced

## Data shape
```json
{
    "id": 1,
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
  }
  ```

## Endpoints
baseURL: http://localhost:3000
GET /ramens
GET /ramens/:id

## MANTRA
FETCH the data
SELECT DOM elements
CREATE new elements (if needed)
ASSIGN data to elements
APPEND elements into DOM