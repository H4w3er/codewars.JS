/*
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as
input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/

//SOLUTION:
function humanReadable (sec) {
    let ss = (sec % 60) < 10 ?  '0' + (sec % 60): (sec % 60);
    let mm=Math.floor((sec%3600)/60) < 10 ? '0' + Math.floor((sec%3600)/60) : Math.floor((sec%3600)/60);
    let hh = (Math.floor((sec-ss)/3600)) < 10 ? '0'+(Math.floor((sec-ss)/3600)): (Math.floor((sec-ss)/3600))
    return `${hh}:${mm}:${ss}`;
}