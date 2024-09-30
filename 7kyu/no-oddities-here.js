function noOdds(values) {
    return values.filter(n => n%2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5, 6]))