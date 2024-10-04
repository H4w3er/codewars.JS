function getDivisorsCnt(n){
    let count = 1
    for(let i = 1; i<=n/2; i++){
        if (n%i===0) {
            count += 1;
            n/=i;
            //console.log(i)
        }
    }
    return count;
}

console.log(getDivisorsCnt(1000));