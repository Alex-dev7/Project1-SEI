const api_key = "n"

const base_url = "https://api.spoonacular.com/food/wine/"

const $section3 = $('.section3')
const $title = $('.title')
const $ulPairings = $('.ulPairings')
const $image = $('.image')
const $description = $('.description')

// this function will be called when searching for a type of wine 
function getTheWinePair(wine) {
    const url = `${base_url}dishes?apiKey=${api_key}&wine=${wine}`

    console.log(url)
    //https://api.spoonacular.com/food/wine/dishes?apiKey=2021cd53d5d342ad86dd928fbbf86f2f&wine=frascati

    $.ajax(url)
    .then((pair) => {
        
        // show the user input
        $title.html(`
        <h3>${wine}</h3>
        `)
        
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

    })
    
}

// this function will be called when searching for a type of food
function getTheDishPair(dish) {
    const url = `${base_url}pairing?apiKey=${api_key}&food=${dish}`

    console.log(url)

    $.ajax(url)
    .then((pair) => {
        console.log(pair)

         // show the user input
        $title.html(`
        <h3>${dish}</h3>
        `)

        //save the parameter into a variable
       const $items = pair.pairedWines
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
       
       
       const $titleTag =  $(`<a>${pair.productMatches[0].title}</a>`)
       $titleTag.attr('href', `${pair.productMatches[0].link}`)
       $image.append($titleTag)


       // show the wine descrition on the page   
       $description.html(`<p>${pair.pairingText}</p>`)




    })


}

// this function will be called when searching for a wine recomandation
function getRecomandation(link) {
    const url = `${base_url}recommendation?apiKey=${api_key}&wine=${link}&number=5`

    //https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=2
    //minRaiting parameter
    

    console.log(url)

    $.ajax(url)
    .then((info) => {
        console.log(info)
        

        $section3.empty()

         //save the parameter into a variable
       const $items = info.recommendedWines
       // adding a header to the ul
       $ulPairings.html("Wines:" )
       //loop through the li items and append them to ul
       for(let i = 0; i < $items.length; i++) {
        $ulPairings.append(`<li>${$items[i].title}</li>`)
       }
        


    })


}
// getRecomandation('pinot noir')


// getTheWinePair("Sauvignon Blanc")

// getTheDishPair("fish")
