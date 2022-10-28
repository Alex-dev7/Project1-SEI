const api_key = "2021cd53d5d342ad86dd928fbbf86f2f"

const base_url = "https://api.spoonacular.com/food/wine/"

const $section3 = $('.section3')
const $title = $('.title')
const $ulPairings = $('.ulPairings')
const $image = $('.image')
const $description = $('.description')
const $wineButton = $('#wineButton')
const $foodButton = $('#foodButton')


//switch buttons
const $wineForm = $('.section1')
const $switchToWine = $('.wine-switch')

const $foodForm = $('.section2')
const $switchToDish = $('.dish-switch')


//click events with switch functions
$switchToDish.on('click', function() {
    $switchToWine.css("background-color", "transparent")
    $wineForm.css(  'transform', 'translate(0px, -300px)')
    $(this).css("background-color", "rgba(95, 150, 55, 0.39)")
    $foodForm.css(  'transform', 'translate(0px, 0px)')

})

$switchToWine.on('click', function() {
    $switchToDish.css("background-color", "transparent")
    $foodForm.css(  'transform', 'translate(0px, -300px)')
    $(this).css("background-color", "rgba(95, 150, 55, 0.39)")
    $wineForm.css(  'transform', 'translate(0px, 0px)')

})

//empty function that targets all the html elements in section3
function clearSection() {
    $image.empty()
    $title.empty()
    $ulPairings.empty()
    $description.empty()
}




// this function will be called when searching for a type of wine 
function getTheWinePair(wine) {
    const url = `${base_url}dishes?apiKey=${api_key}&wine=${wine}`

    console.log(url)
    //https://api.spoonacular.com/food/wine/dishes?apiKey=2021cd53d5d342ad86dd928fbbf86f2f&wine=frascati

    $.ajax(url)
    .then((pair) => {
        clearSection()
        console.log(pair)
        // show the user input
        $title.html(`
        <h3>${wine}</h3>
        `)
        console.log($title)
        
        //save the parameter into a variable
       const $items = pair.pairings
       // adding a header to the ul
       $ulPairings.html("Food pairings:" )
       //loop through the li items and append them to ul
       for(let i = 0; i < $items.length; i++) {
        $ulPairings.append(`<li>${$items[i]}</li>`)
       }

       // show the wine descrition on the page   
       $description.html(`<p>${pair.text}</p>`)

    }, function(error){
        console.log('bad request: ', error);
       })
    
}

// this function will be called when searching for a type of food
function getTheDishPair(dish) {
    const url = `${base_url}pairing?apiKey=${api_key}&food=${dish}&number=5`

    console.log(url)

    $.ajax(url)
    .then((pair) => {
        console.log(pair)
       
        clearSection()

         // show the user input
        $title.html(`
        <h3>${dish}</h3>
        `)

        //save the parameter into a variable
       const $items = pair.pairedWines

       // show the wine descrition on the page   
       $description.html(`<p>${pair.pairingText}</p>`)

       // adding a header to the ul
       $ulPairings.html("Wine pairings:" )
       //loop through the li items and append them to ul
       for(let i = 0; i < $items.length; i++) {
        $ulPairings.append(`<li>${$items[i]}</li>`)
       }

       //adding a product match image
       const $img = $('<img />')
       $img.attr('src', `${pair.productMatches[0].imageUrl}`)
       $image.append($img)
       
       
       const $titleTag =  $(`<a target="_blank">${pair.productMatches[0].title}</a>`)
       $titleTag.attr('href', `${pair.productMatches[0].link}`)
       $image.append($titleTag)


       

    }, function(error){
        console.log('bad request: ', error);
       }
       )


}



//click event for the type of wine button
$wineButton.on("click", (event) => {
     //prevent refresh
     event.preventDefault() 
    
      //grab the text from the input
     const inputText = $(".wine-pair input[type=text]").val()

      // update section3 with api data
     getTheWinePair(inputText)
    
     
     //clear input space after submiting the form
     $("#myInput").val('')
})


//click event for the type of food button
$foodButton.on("click", (event) => {
    //prevent refresh
    event.preventDefault()

     //grab the text from the input
    const inputText = $(".food-pair input[type=text]").val()

     // update section3 with api data
    getTheDishPair(inputText)
    
    //clear input space after submiting the form
    $("#my-Input").val('')
})




