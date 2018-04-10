// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//function getRandomColor creats two variables. var color holds the symbol # and var letters holds a 16 character string that together combine into a hex color. The for loop takes the letters and uses math.floor and math.random * 16 to generate a different string each iteration of the loop. The variable color then returns the new random hex color.
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// function changeColor creates a local variable called cc that takes the document body and changes the background to the hex color that came from the getRandomColor(); function.
function changeColor() {
	var cc = document.body.style.backgroundColor = getRandomColor();
}
// this function getRandomQuote creates a variabled called randomIndex that generates a number between 1 and the number of quotes that I have created. The function then returns the quote inside the quotes array using the randomIndex number that came from the math.floor and math.random.
function getRandomQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}
// function changeQuote creates a local variable named quoteChange that takes the function printQuote and sets it to be selected on an interval of 8000.
function changeQuote() {
	var quoteChange = setInterval(printQuote, 8000);
	function stopPrintQuote() {
		clearInterval(quoteChange);
	  }
}
//

//this function printQuote has a variable that contains the quote from the getRandomQuote function. It then outputs a string with quote array quote property plus the citation property. These are the two required strings that will always be present. From there I am checking if there is a citation, year or tags and if there are then to display them. At the end the variable outputDiv gets the ID quote-box and changes the HTML to the string that is in the variable string.
function printQuote() {
	var quote = getRandomQuote();
	var colorChange = changeColor();
	var flashTheQuote = changeQuote();
	//var stopSelectingPrintQuote = stopPrintQuote();
	//changeQuoteInterval = flashQuote();
	var string = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
	if (quote.citation) {
		string += '<span class="citation">' + quote.citation + '</span>'
	}
	if (quote.year) {
		string += '<span class="year">' + quote.year + '</span>'
	}
	if (quote.tags) {
		string += '<span class ="tags">' + ' ' + quote.tags + '</span>'
	}
	'</p>';
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = string;
}
// this looks for  a click event and then runs the function printQuote.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);