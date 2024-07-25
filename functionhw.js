// funtion is called toCelcius
// we are calling a parameter called f
// line two is saying a return, do the math to conver F to C degrees
// We then tell the computer to log the function we created 'tocelcius' with F being set to 100
// ParseInt rounds to the nearest number so we dont return a number with a decimal

function toCelsius(f) { 
    return parseInt((5/9) * (f-32));
 }

console.log (toCelsius(100));

function toFarenhiet(c) { 
    return parseInt((5/9) * (c-32));
 }

console.log (toFarenhiet(37));

function fff() {
    if (condition) {
    fff=3
    console.log ("fff is equal to 3")
} else{
    console.log ("fff is not equal to 3")
}
}

let friends = {
    best: "Joan",
    secondBest: "Mari",
    thirdBest: "Elaine",
    listingFriends(){
        for (let friend in friends) {
            console.log(`friend at ${friend}:`, friends [friend]);
        }
    }
}
console.log(friends.listingFriends());

 for(let keyFriend in friends){
    console.log (`Your ${keyFriend} friend is:` , friends[keyFriend]);
}