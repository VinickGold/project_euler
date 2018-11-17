function getSum(value) {
    var sum = 0;
    for(let i = value - 1 ; i > 0; i++) {
        if(!i%3 || !i%5) sum+= i;
    }
    return sum;
}

console.log(getSum(10000));