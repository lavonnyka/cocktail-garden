
function startOfGame() {
const read = require("readline-sync")
console.log("*************************************")
console.log("Welcome to the Cocktail Garden")
console.log("*************************************")

let name = read.question("Hello Master, could you provide me with your name?\n")

let order = read.question (`What can I arrange for you today Master ${name}; Today's selectings are:\n vodka or gin?\n`)

const drink = ["vodka", "gin"]

let vodkaChoice;
let ginChoice;

if ( order === "vodka") {

    console.log(`${order} is a fine selection.`)

    vodkaChoice = read.question("What can I pick for you today\n rose or lavender?\n")

    const vFlower = ["rose", "lavender"]

    if (vodkaChoice === "rose" ) {
        console.log("*************************************")
        console.log(`Let's arrange a lady ${vodkaChoice}!`)
        console.log("*************************************")

    let roseIngredients = [
        "1/3 oz. rose syrup",
        "1/3 oz. pomegranate syrup",
        "1 1/3 oz. vodka",
        "1 oz. cranberry juice",
        "3 fresh strawberries",
        "Red rose"]

        for ( i = 0; i < roseIngredients.length; ++i)
        console.log(`Ingredients: ${roseIngredients[i]}`)

} else if (vodkaChoice === "lavender"); {
    console.log("*****************************************")
    console.log(`Let's arrange a ${vodkaChoice} martini!`)
    console.log("*****************************************")

    let lavendarIngredients = [ 
    "1 oz crème de violette", 
    "1 oz. vodka", 
    "1/4 oz. Domaine de Canton",
    "1/4 oz. St. Germaine elderflower liqueur", 
    "1 dash Scrappy’s Lavender Bitters Lavender"]

for ( i = 0; i < lavendarIngredients.length; ++i) {
    console.log(`Ingredients: ${lavendarIngredients[i]}`)
}
}
} else { ( order === "gin")
    console.log(`${order} is a fine selection.`)
    let ginChoice = read.question("What can I pick for you today\n orchid or sunflower?\n")

    const gFlower = ["orchid", "sunflower"]

    if (ginChoice === "orchid") {
        console.log("***************************************")
        console.log(`Lets arrange a brazillan ${ginChoice}!`)
        console.log("***************************************")
        let orchidIngredients = [ 
            "1 oz. gin", 
            "2 oz. Leblon Cachaça",
            "1 oz. splash raspberry liqueur",
            "2 oz. pureed lychee",
            "Orchid"]

            for ( i = 0; i < orchidIngredients.length; ++i) {
                console.log(`Ingredients: ${orchidIngredients[i]}`)
            }

        
    } else if (ginChoice === "sunflower") {
        console.log("**************************************")
        console.log(`Lets arrange a ${ginChoice} cocktail!`)
        console.log("**************************************")

        let sunflowerIngredients = [
            "2 oz. Espolón Tequila Reposado", 
            "1 oz. gin",
            "1 oz. lime juice",
            "3/4 oz. orange Curaçao or Triple Sec",
            "5oz. Light agave nectar",
            "5 cups chopped cantaloupe",
            "1/8 tsp. Chile de árbol powder",
            "Mum"]

            for ( i = 0; i < sunflowerIngredients.length; ++i){
                console.log(`Ingredients: ${sunflowerIngredients[i]}`)

            }

    }
}
const answer = ["yes","no"]
console.log("***************************************************************************")
let endAnswer = read.question(`I hope your vist to The Cocktail Garden was Enchanting\n
Would you like me to prepare another cocktail:\n yes or no?\n`)
if ( endAnswer === "yes"){
    startOfGame()
} else (endAnswer === "no");{
    console.log("**************************************************")
    console.log(`Its been a pleasure serving you Master ${name}.`)
    console.log("**************************************************")

}
}

startOfGame()
