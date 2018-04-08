// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// declaring variables in the global scope
var quote
var randomIndex;
var outputDiv;
let string;
var nIntervId;
var color;
// function changeColor
function changeColor() {
	nIntervId = setInterval(flashBackground, 6000);
}
// this function getRandomColor creats two variables. var color holds the symbol # and var letters holds a 16 character string that together combine into a hex color. The for loop takes the letters and uses math.floor and math.random * 16 to generate a different string each iteration of the loop. The variable color then returns the new random hex color.
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// this function flashBackground has a variable oElem that selects the body and changes the background of the color of the document to the color that was created in the getRandomColor function.     
function flashBackground() {
    var oElem = document.body.style.backgroundColor = getRandomColor();
}
// this function getRandomQuote creates a variabled called randomIndex that generates a number between 1 and the number of quotes that I have created. The function then returns the quote inside the quotes array using the randomIndex number that came from the math.floor and math.random.
function getRandomQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}
//this function printQuote has a variable that contains the quote from the getRandomQuote function. It then outputs a string with quote array quote property plus the citation property. These are the two required strings that will always be present. From there I am checking if there is a citation, year or tags and if there are then to display them. At the end the variable outputDiv gets the ID quote-box and changes the HTML to the string that is in the variable string.
function printQuote() {
	quote = getRandomQuote();
	string = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
	if (quote.citation) {
		string += '<span class="citation">' + quote.citation + '</span>'
	} 
	if (quote.year) {
		string += '<span class="year">' + quote.year + '</span>'
	} 
	if (quote.tags) {
		string += '<span class ="tags">' + ' ' + quote.tags + '</span>'
	}'</p>';
	outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = string;
}
// These are the 3 different functions being called.
printQuote();
getRandomColor();
flashBackground();
// this looks ofr  a click event and then runs the function printQuote.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);