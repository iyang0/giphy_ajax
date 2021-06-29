"use strict"

const API_KEY="MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $SUBMIT_BUTTON = $("#submit-button");
const $RESET_BUTTON = $("#reset-button");
let $giphyForm = $("#giphy-form");
let $searchText = $("#search-text")
let $content = $("#main-content")
let randomGifAPI = `https://api.giphy.com/v1/gifs/random?`


// Submit Button Event Handler
function submitHandler(evt){
	evt.preventDefault();
	// get value from search box 
	let searchQuery = $searchText.val();

	// add the search query to random gif API
	// append the string to to API
	// make AJAX call to the API
	getRandomGif(randomGifAPI, searchQuery)
	// make function to add the gif to the DOM
}

async function getRandomGif(url,searchQuery) {
	let response = await axios.get(url, {params:{api_key:API_KEY, tag:searchQuery}});
	console.log(response);
	console.log('response.data',response.data)
	console.log('response.data.data',response.data.data)

  	addToGallery(response.data.data.image_original_url);
}

$SUBMIT_BUTTON.on("click", submitHandler);

function addToGallery(gif) {
	// Create JQUERY element
	let $img = $('<img>')
		.attr("src", gif)
		.css({"height":"240px","width":"240px"})
	
	$content.append($img);
}


//API parameters q:query, api_key:api key
//e.g. http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

console.log("Let's get this party started!");

