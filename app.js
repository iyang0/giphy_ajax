"use strict"

// initialize global variables
const API_KEY="MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $SUBMIT_BUTTON = $("#submit-button");
const $RESET_BUTTON = $("#reset-button");
const $GIF_FORM = $("#giphy-form")
const GIF_API_BASE = "https://api.giphy.com/v1/gifs";
let $content = $("#main-content");


/*
* Submit Button Event Handler
* callback function that takes the value of text input
* and generates a random gif to put in DOM
*/
async function submitHandler(evt){
	evt.preventDefault();
	// get value from search box 
	let searchQuery = $("#search-text").val();
	let randomGifAPI = `${GIF_API_BASE}/random?`;
	
	let gifURL =  await generateRandomGif(randomGifAPI, searchQuery);
	addToGallery(gifURL);
}


/*
* makes an AJAX Giphy API call for a random gif with the searched term
* and then we add it to the DOM
*/
async function generateRandomGif(url,searchQuery) {
	let response = await axios.get(url, {params:{api_key:API_KEY, tag:searchQuery}});
	return response.data.data.image_original_url
  	
}

/*
* take in a URL of a gif
* create an image element with the gif
* append the image to the DOM
*/
function addToGallery(gif) {
	// Create JQUERY element
	let $img = $('<img>')
		.attr("src", gif)
		.css({"height":"240px"
			,"width":"240px"
			,"margin":"3px"});
	
	$content.append($img);
}

/*
* emptying every child element in the #content tag
*/
function removeGifs(){
	$content.empty()	
}

//event handlers for submit and reset buttons.
$GIF_FORM.on("submit", submitHandler);
$RESET_BUTTON.on("click", removeGifs);


console.log("Let's get this party started!");

