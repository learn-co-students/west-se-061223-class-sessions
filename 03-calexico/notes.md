# Core Deliverables
As a user, I can:
1. View all menu itmes in a Menum secion on page load
  - [x] Fetch all dish data (and jsonify)
  - [x] Iterate over dish data; send each dish to render fn
  - [x] Create a <span> for each dish
  - [x] Add dish name as text to the <span>
  - [x] Append each <span> to anchor
2. View the details of the first menu item in Dish detail section on page load
  - [x] Select the DOM elements to modify
  - [x] Pass one dish to render function (from dish array)
  - [x] Set element attrs with data from dish obj
3. Click a menu itme and see it's details displayed in the Dish detail section
  - [x] add event listeners to each <span> in menu
  - [x] listen for 'click' event and handle with callback
  - [x] use renderDetail as event handler
4. Add menu items to 'my cart' Cart only needs to increment when same dish is selected, but can reset wehn another is selected (no persistence front or back end)
  - [x] select form from DOM
  - [x] attach event listener and handle 'submit' event
  - [x] preventDefault() on event
  - [x] get form value from selected input field OR from event.target
  - [x] get value of cart from DOM
  - [x] calculate the new value and update DOM
## Bonus Deliverables
1. [x] Persist cart value for each item on front end
2. [x] Calculate *total cost* of cart for all items and display somewhere on page
3. [x] Persist cart value on the back end with PATCH requests

## Data shape
```json
{
    "id": 1,
    "name": "Chips & Guacamole",
    "image": "./assets/calexico-guac.webp",
    "description":"House-made tortilla chips with fresh daily made guacamole",
    "price": 13.00,
    "number_in_bag": 0
}
```

## Mantra
1. Get data
2. Create new elements/select elements to modify
3. Add data to new elements
4. Select anchor elements in DOM
5. Append new elements to anchor elements 