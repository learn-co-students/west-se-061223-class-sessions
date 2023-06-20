# Deliverables
As a user, I can:
1. View all movies in the nav element on page load
 - [x] Fetch all movie data
 - [x] Iterate over array of movies
 - [x] Create <img> for each movie
 - [x] Add a src to each <img> from each movieObj
 - [x] select nav element as anchor point
 - [x] Append each <img> to anchor

2. View the 1st movie details on page load
 - [] Fetch data for 1st movie? (if necessary)
 - [x] select the proper DOM elements
 - [x] set attributes of DOM elements with selected movie obj properties
 - [x] call render function and send 1st movie obj

3. Click a movie in the nav and see its details in the detail section
4. Click a "watched" button which toggles; it persists only in DOM
5. Enter a number of drops for each movie and have it persist in the DOM

MANTRA
1. Get data
2. Create new elements
3. Add data to new elements
4. Select anchor element from DOM
5. Append new elements to anchor

## Data shape 
```json
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```