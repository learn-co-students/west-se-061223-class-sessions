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
3. Submit a form to create a new ramen in the menu (no persistence)

## Advanced deliverables

## Extra advanced

## Data shape

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