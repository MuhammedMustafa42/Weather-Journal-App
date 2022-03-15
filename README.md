# Weather Journal app Project

This project is about working with Web APIs, asynchronous functions, POST and GET Routes to create a web app that uses OpenWeatherMap API to get weather data based on written zip code.

### Building Process

1. Installed Node.js.
2. Installed Express, CORS and body-parser through NPM package manager.
3. created a local server to store and get data
on using GET and POST Routes created on the server.
4. Fetched weather data by using async functions
and stored it on the server to be fetched later.
5. Created a function to update the UI when the user click the search button.
6. Updated the HTML and CSS files to create a new design that is also responsive.

### How the app works

1. the user puts a valid US zip code.
2. the user types how he feels.
3. clicks on the search button.
4. the client query the OpenWeatherMap using the given zip code and fetches an object holding the data.
5. the client sends a POST request to the server to store the fetched data.
6. the client sends a GET request to the server
to get all the data stored in an object that we
created.
7. Lastely the client updates the UI to show the needed info.

