// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called



var quote
var randomIndex;
var source;
var printQ;
var outputDiv;


function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote() );


console.log(quote);
printQuote();


function printQuote() {
    quote = getRandomQuote();
    outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = 
        '<p class="quote">' + quote.quote + '</p>' +
        '<p class="source">' + quote.source + '</p>';
    console.log("This is my random quote: " + quote.quote);
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
