/*
Description:
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//SOLUTION

function getCount(str) {
    let count = 0;
    let rule = /a|e|i|o|u/;
    for (let i = 0; i<str.length; i++){
        if (rule.exec(str[i])){
            count+=1;
        }
    }
    return count;
}

console.log("Get Count: " + getCount("given string"))