/*
Description:
Your colleagues have been looking over your shoulder.
When you should have been doing your boring real job,
you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working.
You're in trouble. You quickly have to gauge the feeling in the room to decide
whether or not you should gather your things and leave.

Given an object ( meet ) containing team member names as keys, and their happiness rating
out of 10 as the value, you need to assess the overall happiness rating of the group.
If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room ( boss ). Their score is worth double its face value
(but they are still just one person!).*/

//SOLUTION

function outed(meet, boss){
    meet[boss] = meet[boss]*2;
    let count = (meet['tim'] + meet['jim'] + meet['john']
        + meet['randy'] + meet['sandy'] + meet['andy'] + meet['mr']
        + meet['katie'] + meet['laura'] + meet['saajid'] + meet['alex'])/11;
    if (count<=5) return  'Get Out Now!';
    else return 'Nice Work Champ!';
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))
