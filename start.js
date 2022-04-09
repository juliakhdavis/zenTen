const musicConEL = document.querySelector(".musicContainer")
const imageConEL = document.querySelector(".imageContainer")
const quoteConEL = document.querySelector(".quoteContainer")
const quoteEL = document.querySelector(".quote");
const timeEl = document.getElementById("time")


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

    quoteEL.textContent = quoteText + "    -" +quoteAuthor;

    setInterval(function(){
    let getQuoteNumber = Math.floor(Math.random() * 1642);

    let quoteText = quoteData[getQuoteNumber].text;
    
    let quoteAuthor = quoteData[getQuoteNumber].author;

    quoteEL.textContent = quoteText + "    -" +quoteAuthor;

    if (quoteEL.textContent === "Thank You") {
    }
  }, 5000)
});


let savedTimeInput = localStorage.getItem("timeInput");

parseInt(savedTimeInput);

savedTimeInput = savedTimeInput * 1 ; 

setInterval(function(){
    savedTimeInput = savedTimeInput -1;
    if (savedTimeInput === 0) {
        console.log("game over")
        }
    

}, 1000);

