"use strict"

const API_KEY="MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $SUBMIT_BUTTON = $("#submit-button");
const $RESET_BUTTON = $("#reset-button");
let $giphyForm = $("#giphy-form");
let $searchText = $("#search-text")
let $content = $("#main-content")
let randomGifAPI = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=`

function submitHandler(evt){
	evt.preventDefault();
	// get value from search box
	let searchQuery = $searchText.val();
	console.log(evt);
	console.log(searchQuery);
	// add the search query to random gif API
	// append the string to to API
	let apiCall = randomGifAPI+searchQuery;
	// make AJAX call to the API
	// make async function for the call
	// returns a promise which we will await for
	//after finish awaiting put that object.
	// make function to add the gif to the DOM
}

$SUBMIT_BUTTON.on("click", submitHandler)


//API parameters q:query, api_key:api key
//e.g. http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

console.log("Let's get this party started!");

