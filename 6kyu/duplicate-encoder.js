/*
Description:
The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" if that character appears only once
in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

    Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

NOTES
Assertion messages may be unclear about what they display in some languages.
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/

//SOLUTION

function duplicateEncode(word){
    word= word.toLowerCase();
    let word1= word;
    if (word.includes(")"))  word1 = word = word.replaceAll(")", "w")
    for (let i = 0; i<word.length; i++){
        for (let j = word.length-1; j>i; j--){
            if (word[i] === word[j]) {
                word1 = word1.replace(word[i], ")")
                word1 = word1.replace(word[j], ")")
            }
        }
    }
    let k = word.length-1;
    while (k>=0){
        if (word1[k]!==")") word1 = word1.replace(word1[k], "(");
        k--;
    }
    return word1;
}

console.log("Duplicate Encode: " + duplicateEncode("Success"))