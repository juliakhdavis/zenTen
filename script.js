const musicEL = document.querySelector(".musicContainer")
const imageEL = document.querySelector(".image")
const quoteEL = document.querySelector(".quoteContainer")


// imageApi = 'https://api.unsplash.com/photos/?client_id=R_iTdb6HaJJNCC32vNG2rbg9Am-stogGSupk5Xq9ZGs'

quoteApi = "https://type.fit/api/quotes"


// https://type.fit/api/quotes free code camp returns 1600 quotes

var unsplashAPI = "11Fvmpk3Ob6nJr35QbIqI-NsjOfdCAceNwpdSCNO0D0"
// var userInput = localStorage.getItem("param")
var userInput = "city"

function getPictures(){
  console.log("test")
  let pictureURL = "https://api.unsplash.com/search/photos?per_page=30&query=" + userInput + "&client_id=" + unsplashAPI;
  fetch(pictureURL)
  .then(function(response){
    return response.json()
  }).then(function(data){
    console.log("data: ", data)
   
    let getPictureNumber = Math.floor(Math.random() * 29);
    imageEL.src = data.results[getPictureNumber].urls.small
         
      setInterval(function(){
        let getPictureNumber = Math.floor(Math.random() * 29);
        imageEL.src = data.results[getPictureNumber].urls.small
    }, 10000)
  })
 
}

getPictures()

// fetch(quoteApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (quoteData) {
//   console.log(quoteData)


// });

// fetch(musicApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (musicData) {
//   console.log(musicData)

// });
