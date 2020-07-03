# Jampp - UI Team - Exam

## 1. First exercise (ES6)
On the `moviesAndSubtitles.js` file you will find an old method which is not working really good (sometimes it gets too slow), plus is written using ES5 (and now, the rest of the platform is using ES6).

Ideally, you should re-write the old method using ES6, and improve it in any way you can.

You can use the dataset located in `example1.js` to test and validate the new method.

## 2. Second exercise (Express API)

We have a basic express app to search movies using an external API (http://www.omdbapi.com/#parameters). We need to do the following tasks:

1. Firing up the app and going to http://localhost:3000/movies/search?q=sharknado shows a blank loading page. Fix it.
2. We need to log every API request to stdout (datetime, method, url, ip). We would like to enable this feature according to a configuration option.
3. We need to change the format of the search endpoint to be `/movies/search/[searchTerm]`.
   And also need to add an optional `sort` and `order` parameters: `/movies/search/[searchTerm]/sort/[Year|Title]/order/[Asc|Desc]` to change the order of the results according to the selected field.
4. We should implement a friendlier http client library. Extra points for making a separate omdb service.

### Getting started
`yarn install` will install the required dependencies.\
`yarn dev` will fire up a livereload server on [http://localhost:3000](http://localhost:3000).\
`yarn lint` will run the linter.

## 3. Third exercise

We need to add some extra functionality to the API of the previous excercise.

1. We need to add a `/movies/[imdbID]` endpoint to return an object with the movie details. (Check examples/response2.js)
2. Add an optional `fields` query parameter to select the fields to return. Example: `/movies/tt0087928?fields=Title,Year,Country`
3. We need to add a `/movies/[imdbID]/cast` endpoint to return an object with the cast (Director, Writer, Actors) for a particular movie. (Check examples/response3.js)

Any other improvement is a plus.

## 4. Fourth exercise (React + Redux)
![ui](/fourth-exercise/ui.png)

After starting the app, you should see a page with a title and some cards.

The app was built using React + Redux to handle the state. However, as you can see, is not doing anything.

You need to code the UI based on the image and make an application that show a list of people with different `fields` (movies, writers, directors, and actors) from the movies that they likes. The user should change the `fields` that is showing using the `FieldsSelector`.

To make it work, you should use the API from the previous exercises (or you can use the demo API, see instructions below).

Bonus points:

- Project structure: we like to separate each functionality in different dirs (presentational components vs container components are a good example)
- Pixel perfect: we value so much the coherence between the design and the final result

### Getting started
`yarn install` will install the required dependencies.\
`yarn dev` will fire up a livereload server on [http://localhost:3030](http://localhost:3030).\
`yarn lint` will run the linter.

### Using the demo API
Go to `demo-server/` and run:

`yarn install` will install the required dependencies.\
`yarn start` will fire a test server in [http://localhost:3000](http://localhost:3000).

You can access `/users`, `/movies/[imdbID]` and `/movies/[imdbID]/cast` to get an static example of each endpoint.
