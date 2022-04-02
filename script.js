const musicEL = document.querySelector(".musicContainer")
const imageEL = document.querySelector(".imageContainer")
const quoteEL = document.querySelector(".quoteContainer")


imageApi = 

quoteApi = "https://zenquotes.io/api/random"

musicApi = 



// fetch(imageApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (imageData) {
//   console.log(imageData)

// });

fetch(quoteApi)
.then(function (response) {
  return response.json();
})
.then(function (quoteData) {
  console.log(quoteData)

});

// fetch(musicApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (musicData) {
//   console.log(musicData)

// });