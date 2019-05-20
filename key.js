require('dotenv').config();
var exports;

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
console.log('This loaded!');




