const musicEL = document.querySelector(".musicContainer")
const imageEL = document.querySelector(".imageContainer")
const quoteEL = document.querySelector(".quoteContainer")


// imageApi = 'https://api.unsplash.com/photos/?client_id=R_iTdb6HaJJNCC32vNG2rbg9Am-stogGSupk5Xq9ZGs'

quoteApi = "https://type.fit/api/quotes"


// https://type.fit/api/quotes free code camp returns 1600 quotes



// fetch(imageApi)
// .then(function (response) {
//   return response.json();
// })
// .then(function (imageData) {
//   console.log(imageData)

//   imageEL.textContent = 

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