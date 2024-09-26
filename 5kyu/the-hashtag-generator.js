/*
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
    Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false*/

//SOLUTION:
function generateHashtag (str) {
    if (/[a-z]/i.test(str)) {
        str = str.trim();
        str = str.replace(str[0], str[0].toUpperCase());
        while (/\s/.test(str)) {
            str = str.replace(/\s([A-Z])/ig, ($0, $1) => $1.toUpperCase());
        }
        if (str.length >= 140 || str === '') return false;
        else return '#' + str;
    } else return false;
}

console.log("Generated hashtag: " + generateHashtag(" Hello there thanks for trying my Kata"));