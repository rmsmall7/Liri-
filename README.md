Homework #10 Liri-Bot

For this assignment Liri-Bot is used like SIRI but without voice command.  LIRI will be a command line node app that takes in parameters and gives you back data.

Liri-Bot uses the following commands:
* spotify-this-song
* movie-this
* concert-this
* do-what-it-says

Technologies used: 
* Node.js
* javaScript

NPM Packages:
* twitter - an asynchronous client library for the Twitter REST and Streaming API's.
* spotify - A simple to use API library for the Spotify REST API.
* request - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

To use Liri-Bot:  
* node liri.js concert-this <artist/band name here>
  * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
      * Name of the venue
      * Venue location
      * Date of the Event (use moment to format this as "MM/DD/YYYY")
      
      **  Example: Artist Pink was seleected for this example

     ![concertThis](https://github.com/rmsmall7/Liri-Bot/blob/master/video/concertThis.gif)   

* node liri.js spotify-this-song '<song name here>'
  * This will show the following information about the song in your terminal/bash window.
  * If there is not song entered then the application will return "The Sign" by Ace of Base
      * Artist(s)
      * The song's name
      * A preview link of the song from Spotify
      * The album that the song is 
 
   **Example: In this example the song name was left blank.  App displayed the default song "The Sign"
 
     ![songBlank](https://github.com/rmsmall7/Liri-Bot/blob/master/video/songBlank.gif)
  
  * node liri.js movie-this '<movie name here>'
    * This will output the following information to your terminal/bash window:
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
  
   * node liri.js do-what-it-says
      * Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
      * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

  
  
  




