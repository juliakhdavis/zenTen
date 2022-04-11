const musicConEL = document.querySelector(".musicContainer")
const imageConEL = document.querySelector(".imageContainer")
const imageEL = document.querySelector(".image")
const quoteConEL = document.querySelector(".quoteContainer")
const quoteEL = document.querySelector(".quote");
const authorEL = document.querySelector(".author");
const timeEl = document.getElementById("time")
const mainEl = document.querySelector(".main")


// quote api and interval
quoteApi = "https://type.fit/api/quotes"

fetch(quoteApi)
.then(function (response) {
  return response.json();
})
.then(function (quoteData) {
  
  console.log(quoteData)
        
    let getQuoteNumber = Math.floor(Math.random() * 1642);

    let quoteText = quoteData[getQuoteNumber].text;
    
    let quoteAuthor = quoteData[getQuoteNumber].author;

    if (quoteAuthor === null) {
      quoteAuthor = "Unknown"
    }

    quoteEL.textContent = quoteText
    authorEL.textContent = "-" + quoteAuthor;

    setInterval(function(){
    let getQuoteNumber = Math.floor(Math.random() * 1642);

    let quoteText = quoteData[getQuoteNumber].text;
    
    let quoteAuthor = quoteData[getQuoteNumber].author;

    quoteEL.textContent = quoteText;

    if (quoteAuthor === null) {
      quoteAuthor = "Unknown"
    }
    console.log(quoteAuthor)

    authorEL.textContent = "-" + quoteAuthor;

  }, 10000)
});

// image api and interval

var unsplashAPI = "11Fvmpk3Ob6nJr35QbIqI-NsjOfdCAceNwpdSCNO0D0"
var userInput = localStorage.getItem("param")
// var userInput = "city"

function getPictures(){
  console.log("test")
  let pictureURL = "https://api.unsplash.com/search/photos?per_page=30&query=" + userInput + "&client_id=" + unsplashAPI;
  fetch(pictureURL)
  .then(function(response){
    return response.json()
  }).then(function(data){
    console.log("data: ", data)
   
    console.log(data)
    let getPictureNumber = Math.floor(Math.random() * 29);
    imageEL.src = data.results[getPictureNumber].urls.small
         
      setInterval(function(){
        let getPictureNumber = Math.floor(Math.random() * 29);
        imageEL.src = data.results[getPictureNumber].urls.small
    }, 10000)
  })
 
}

getPictures()

// background timer

let savedTimeInput = localStorage.getItem("timeInput");

parseInt(savedTimeInput);

savedTimeInput = savedTimeInput * 60 ; 

setInterval(function(){
    savedTimeInput = savedTimeInput -1;
    if (savedTimeInput === 0) {
        quoteConEL.remove();
        imageConEL.remove();
        let restart = document.createElement("h1")
        restart.textContent = "Thank You! Click to return to homepage!";
        restart.classList.add("quote")
        mainEl.appendChild(restart)
        restart.addEventListener("click", function () {
          location.href = "index.html"
        })


        }
}, 1000);

