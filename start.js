const musicConEL = document.querySelector(".musicContainer")
const imageConEL = document.querySelector(".imageContainer")
const quoteConEL = document.querySelector(".quoteContainer")
const quoteEL = document.querySelector(".quote");
const authorEL = document.querySelector(".author");
const timeEl = document.getElementById("time")
const mainEl = document.querySelector(".main")



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
        mainEl.appendChild(restart)
        restart.addEventListener("click", function () {
          location.href = "index.html"
        })


        }
}, 1000);

