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