
var keys = require('./key.js');
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var axios = require("axios");


var input = process.argv;
var command = process.argv[2];
var userdata = process.argv[3];


//Spotify-this-song fucntion listed below:
function spotifyTrack(info){
  if(!info){
    info = ('Old Town Road by Lil Nas X')
  }
  spotify.search({type: 'track', query:info}, function(error, data){
    if(error){
      console.log("Error: " +error);
      return;
    }
    console.log(data);
    var summary = data.tracks.items;

    console.log("Artist(s): " +summary[0].artist[0].name);
    console.log("Song Name: " +summary[0].name);
    console.log("Preview Link: " + summary[0].preview_url);
    console.log("Album: " + summary[0]. album.name);
  })
};

//Movie-this function listed below:
function omdbMovie(info){
  var queryUrl = "http://www.omdbapi.com/?t=" + info + "&y=&plot=short&apikey=trilogy";
  

  request(queryUrl, function(eror, response, body){
    if(info){
      info="Mr Noboy";
    }
    if(!error && response.statusCode === 200){
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).rating[1].Value);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
};

//concert-this function below:
function concert(info) {
  var queryUrl = 'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp';

  request(queryUrl, function(error, response){
    if(!info){
      info="Pinkfong";
    }
    if(!error && response.statusCode === 200) {
      var result = JSON.parse(response.body)[0];
      console.log("City: " + result.venue.city);
      console.log("Venue Name: " + result.venue.name);
      console.log("Event Date: " + moment(result.datetime).format("mm/dd/yyyy"));
    }
  });
}

//Do-what-it-says function listed below:
function lirisays() {
  fs.readFile('random.txt', 'utf8', function(error, data){
    if(error){
      return console.log(error)
    };
    var dataArr = data.split(',');
    if (dataArr[0] === 'spotify-this-song'){
      spotifyTrack(dataArr[1]);
    }else if (dataArr[0] === 'movie-this'){
      omdbMovie(dataArr[1]);
    } else if(dataArr[0] === 'concert-this'){
      concert(dataArr[1]);
    }else {
      console.log("Not sure what you are doing?!!?")
    };
  });
};



// will use switch case below.  This is my first time using this and I found instructions at https://www.w3schools.com/js/js_switch.asp
switch (command) { 
    case 'spotify-this-song':
      if(userdata){
        spotifyTrack(userdata);
      }else {
        spotifyTrack();
      };
      break;
    
    case 'movie-this':
      if(userdata){
        omdbMovie(userdata);
      }else {
        omdbMovie('Mr. Nobody');
      };
      break;

    case "do-what-it-says":
      lirisays();
      break;

    case "concert-this":
      if(userdata) {
        concert(userdata);
      }else {
        concert(" ");
      };
      break;

    default:
      console.log("{Enter a command:  spotify-this-song, movie-this or do-what-it-says}");
      break;   
  
};

// function concert(parameter) {
//   if (action === 'concert-this') {
//     var artist = "";
//     for (var i = 3; i < process.argv.length; i++) {
//       artist += process.argv[i];
//     }
//     console.log(artist);
//   } else {
//     artist = parameter;
//   }

  

//   request(queryUrl, function (error, response, body) {
//     if (!error && response.statusCode === 200) {

//       var jas = JSON.parse(body);
//       for (i = o; i < jas.length; i++) {
//         var time = jas[i].datetime;
//         var month = time.substring(5, 7);
//         var year = time.substring(0, 4);
//         var day = time.substring(8, 10);
//         var dateForm = month + "/" + day + "/" + year

//         logIt("\n-------------------------------------\n");

//         logIt("Date: " + dateForm);
//         logIt("Name: " + jas[i].venue.name);
//         logIt("City: " + jas[i].venue.city);
//         if (jas[i].venue.region !== "") {
//           logIt("Country: " + jas[i].venue.region);
//         }
//         logIt("Country: " + jas[i].venue.country);

//         logIt("\n-------------------------------------\n");
//       }
//     }
//   });
// }

// function spotiSong(parameter){
//   var searchSong;
//   if(parameter === undefined){
//     searchSong = "Old Town Road";
//   } else{
//     searchSong = parameter;
//   }
//   spotify.search({
//     type: 'track',
//     query: searchSong,
//   }, function(error, data){
//     if(error){
//       logIt('Error: '+ error);
//       return;
//     }else {
//       logIt("\n-------------------------------------\n");
//       logIt("Artist: " +data.tracks.items[0].artist[0].name);
//       logIt("Song: " +data.tracks.items[0].name);
//       logIt("Preview: " +data.tracks.items[3].preview_url);
//       logIt("Album: " +data.tracks.items[0].album.name);
//       logIt("\n-------------------------------------\n");
//     }
//   });
// };