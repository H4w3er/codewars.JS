/*
Description:
    Write a function that takes as its parameters one or more numbers which are the diameters of circles.

    The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

    You don't know how many circles you will be given, but you can assume it will be at least one.

So:

    sumCircles(2) == "We have this much circle: 3"
sumCircles(2, 3, 4) == "We have this much circle: 23"*/

//SOLUTION

function sumCircles() {
    let result = 0;
    for(const n of arguments) {
        result += Math.PI * ((n / 2) ** 2);
    }
    return "We have this much circle: " + Math.round(result);
}

console.log(sumCircles(2, 3 ,4))