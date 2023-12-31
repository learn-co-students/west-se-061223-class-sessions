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
  - [x] Add event listener to each <img> in nav
  - [x] use renderDetail fn from above

4. Click a "watched" button which toggles; it persists only in DOM
  - [x] add event listener to the button
  - [x] cb needs a contitional that sets the button text
  - [x] cb will flip flip the value of watched for the detail movie obj

5. Enter a number of drops for each movie and have it persist in the DOM
 - [x] select the form
 - [x] add listener to form
 - [x] preventDefault()
 - [x] get input value form form
 - [] increment the `blood_amount` for detail movie with input value
 - [] update the DOM

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