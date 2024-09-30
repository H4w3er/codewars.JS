function sortSequence(sequence) {
    /*sequence = ((sequence.slice(0,3).sort().concat(sequence.slice(4,7).sort()))
        .concat(sequence.slice(8,11).sort())).concat(sequence.slice(12,15).sort());*/
    sequence= sequence.slice(0,3).reduce((a,b) => a+b)>sequence.slice(4,7).reduce((a,b) => a+b) ?
        sequence : sequence.slice(4,8) +" "+ sequence.slice(0,4) +" "+ sequence.slice(8);
    return sequence;
}

console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]))