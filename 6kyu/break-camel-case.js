/*
Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

//SOLUTION

function solution(string) {
    let string1 = string.toUpperCase();
    let count = 0;
    for (let i =0; i<string.length-1; i++){
        if (string[i]==string1[i]) {
            count = i;
            string = string.slice(0,count) + " " + string.slice(count);
            string1=" "+string1;
            i+=1;
        }
    }
    return string;
}

console.log("Solution: " + solution("camelCasing"))