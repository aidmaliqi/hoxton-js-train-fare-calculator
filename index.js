let name = String(prompt("what is your name?"))
let age= Number(prompt("What is your age?"))
let travelDistance = Number(prompt("what is your travelling distance"))

//  -- The price per travelled km will be £0.21
let pricePerKm = 0.21
// -- Junior passengers (under 18) get a 20% discount
let discountUnder18 = 0.8
//-- Senior passengers (over 65) get a 40% discount
let discountOver65 = 0.6

let price = 0

if (age < 18) {
    price = (travelDistance * pricePerKm) * discountUnder18
} else if (age > 65) {
    price = (travelDistance * pricePerKm) * discountOver65
} 
else{
    price = (travelDistance * pricePerKm)
}
    
console.log("You will need to pay" , price , "$ for travelling")