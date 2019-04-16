# Pokechallenge

![pokechallenge](https://www.dropbox.com/s/m1zd5v6uetbdjmt/pokechallenge.JPG?raw=true "pokechallenge screenshot")

## Description

Pokechallenge is an application that consumes an API called PokeAPI, which resides at: https://pokeapi.co/
Data is presented in pages, each one holding 20 clickable Pokemon cells. Once a Pokemon cell is clicked, a route is generated and individual pokemon data is presented.

Some basic animations where used for transitions.

Bootstrap was used to style and present this basic app.

---
## Libraries Used

#### Development:

* axios@0.18.0
* bootstrap@4.3.1
* react@16.8.6
* react-animated-css@1.0.5
* react-router-dom@5.0.0

---

## Installation Procedure

1. Clone or download the aplication from [Pokechallenge in GitHub](https://github.com/Cesar-Jim/pokechallenge)

(Terminal)

2. Go to the root directory of the application: cd .. /pokechallenge
3. type "npm install" and hit enter
4. type npm start to initialize the app and server

(Browser)

5. Open your browser and type in the following in your navigation bar: localhost:3000
6. All set!

---

## Main Challenges / Lessons Learned

1. Revision of the API documentation took quite some time, especially for the pagination part.
2. Used "axios" library for the first time. I've learned that it is very useful to handle http requests. 
3. Implementation of async/await proved to work pretty well.

---

## What I have done differently?

1. Used Sass preprocessor to streamline styling.

---

## Next Steps and Future Goals

1. Beautify the application with CSS and probably implement GreenSock animations for greater impact.
2. Sort the Pokemon list using a convenient sorting algorithm.
3. Once the data is sorted, add searching capabilities using binary seacrh. Which provides an efficient O(Log n) time complexity.

---

## Repo in GitHub

Find the repository here: [pokechallenge repo](https://github.com/Cesar-Jim/pokechallenge)

---

By Cesar Jimenez
