function log(base, x) {
    if (x < 0 || base <= 0) {
       return NaN;
    }
    if (x === 0) {
       return -Infinity;
    }
    if (x === 1) {
       return 0;
    }
    var result = 0;
    while (x >= base) {
       result++;
       x /= base;
    }
 
    var decimalString = "0.";
    for (let index = 0; index < 9; index++) {
       var fraction = 0;
       x = power(x, 10);
 
       while (x >= base) {
          fraction++;
          x /= base;
       }
       decimalString += fraction;
    }
 
    fractionDouble = parseFloat(decimalString);
    return result + fractionDouble;
}

export default log;