const api_key = "2021cd53d5d342ad86dd928fbbf86f2f"

const base_url = "https://api.spoonacular.com/food/wine/"

const $title = $('.title')
const $pairings = $('.pairings')
const $image = $('.image')
const $description = $('.description')

// this function will be called when searching for a type of wine 
function getTheWinePair(wine) {
    const url = `${base_url}dishes?apiKey=${api_key}&wine=${wine}`

    console.log(url)
    //https://api.spoonacular.com/food/wine/dishes?apiKey=2021cd53d5d342ad86dd928fbbf86f2f&wine=frascati

    $.ajax(url)
    .then((pair) => {
        console.log(pair)
        const $section = $('.section3')

        $title.html(`
        <h3>${wine}</h3>
        `)
        $pairings.html(`
        <ul></ul>
        `)

    })
    
}

// this function will be called when searching for a type of food
function getTheDishPair(dish) {
    const url = `${base_url}pairing?apiKey=${api_key}&food=${dish}`

    console.log(url)

    $.ajax(url)
    .then((pair) => {
        console.log(pair)
    })


}

// this function will be called when searching for a wine recomandation
function getRecomandation(wineType) {
    const url = `${base_url}recommendation?apiKey=${api_key}&wine=${wineType}&number=5`

    //https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=2
    //minRaiting parameter
    

    console.log(url)

    $.ajax(url)
    .then((info) => {
        console.log(info)
    })


}

// getTheWinePair("pinot grigio")

const pai = ["merlot", "chardoney", "pinot noir"]

function makeListElements(arr) {
    const ul = document.createElement('ul')
    ul.append()
     for(let i of arr) {

     }
}