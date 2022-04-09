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

    let addQuote = setInterval(function(){
    let getQuoteNumber = Math.floor(Math.random() * 1642);

    let quoteText = quoteData[getQuoteNumber].text;
    
    let quoteAuthor = quoteData[getQuoteNumber].author;

    quoteEL.textContent = quoteText + "    -" +quoteAuthor;

  }, 10000)
});


let savedTimeInput = localStorage.getItem("timeInput");

parseInt(savedTimeInput);

savedTimeInput = savedTimeInput * 5 ; 

setInterval(function(){
    savedTimeInput = savedTimeInput -1;
    if (savedTimeInput === 0) {
        quoteConEL.remove();

        }
}, 1000);

