function sortSequence(sequence) {
    /*sequence = ((sequence.slice(0,3).sort().concat(sequence.slice(4,7).sort()))
        .concat(sequence.slice(8,11).sort())).concat(sequence.slice(12,15).sort());*/
    /*sequence= sequence.slice(0,3).reduce((a,b) => a+b)<sequence.slice(4,7).reduce((a,b) => a+b) ?
        sequence : sequence.slice(4,8) +","+ sequence.slice(0,4) +","+ sequence.slice(8);*/
    let str = [];
    let a1 = sequence.slice(0, 3).reduce((a,b)=>a+b)
    let a2 = sequence.slice(4, 7).reduce((a,b)=>a+b)
    let a3 = sequence.slice(8, 11).reduce((a,b)=>a+b)
    let a4 = sequence.slice(12, 15).reduce((a,b)=>a+b)
    let arr = [a1, a2, a3, a4];
    arr = arr.sort((a, b) => a-b);
    for (let j = 0; j<4; j+=1){
        for (let i = 0; i<sequence.length; i+=3) {
            if (sequence.slice(i, i+3).reduce((a,b)=>a+b) === arr[j]){
                str.push(sequence.slice(i, i+3).sort((a,b) => a-b));
                break;
            }
            i++;
        }
    }
    str = str.join(",0,") + ",0";
    str = str.split(',')
    return str.map(Number);
}

console.log(sortSequence([ 3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0 ]));