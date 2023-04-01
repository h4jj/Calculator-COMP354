export function power(x, y) {
    if (y === 0) return 1;
    if (y === 1) return x;
    if (y < 0) return 1 / power(x, -y);
    let result = 1;
    while (y > 0) {
      if (y % 2 === 0) {
        x *= x;
        y /= 2;
      } else {
        result *= x;
        y--;
      }
    }
    return result;
}

export function sinh(x){
    //set e^x
    let e1 = exp(x);
    //set e^-x
    let e2 = exp(-x);
    //calculate sinh(x) = e^x-e^-x/2
    let result = (e1 - e2)/2;
    return result;

    //used to calculate e^x
    function exp(x) {
        let exp = 1;
        let term = 1;
        //using 50 as an interator, as this gets accurate results of e^x, any higher number does not make a difference.
        for (let i = 1; i < 50; i++) {
            term *= x / i;
            exp += term;
        }
        return exp;
    }
}

// Takes in an array of numbers and returns the mean
function mean(numbers) {
  let sum = numbers.reduce((sum, curr) => sum + curr, 0);
  return sum / numbers.length;
}
  
  // Returns the absolute value of a number
function abs(value) {
  return value >= 0 ? value : -value;
}
  
// Takes in an array of numbers and return the MAD (Mean Absolute Deviation)
export function mad(numbers) {
  // Calculate the mean of the numbers
  let meanValue = mean(numbers);

  // Calculate the absolute deviations from the mean using custom abs function
  let absoluteDeviations = numbers.map(num => abs(num - meanValue));

  // Calculate and return the mean of the absolute deviations
  return mean(absoluteDeviations);
}

export function log(base, x) {
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
 
    let fractionDouble = parseFloat(decimalString);
    return result + fractionDouble;
}

function squareRoot(x) {
  if (x < 0) throw new Error("Cannot take square root of negative number");
  if (x === 0) return 0;
  let guess = x / 2;
  for (let i = 0; i < 10; i++) {
    guess = (guess + x / guess) / 2;
  }
  return guess;
}

export function standardDeviation(numbers) {
  const n = numbers.length;
  const mean = numbers.reduce((sum, x) => sum + x, 0) / n;
  const squaredDifferences = numbers.map(x => (x - mean) * (x - mean));
  const sumOfSquaredDifferences = squaredDifferences.reduce((sum, x) => sum + x, 0);
  const variance = sumOfSquaredDifferences / n;
  const standardDeviation = squareRoot(variance);
  return standardDeviation;
}

/**
* Computes the arccosine of a given input value using the Maclaurin series approximation.
* @param {number} x - The input value (must be between -1 and 1).
* @returns {number} The arccosine of x in radians.
* @throws Throws an error if x is outside the range [-1, 1].
*/

export function arccos(x) {
 // Check that x is within the valid range of -1 to 1.
  if (x > 1 || x < -1) {
    throw "Input value out of range";
  }
 
  // Initialize variables.
  let result = 0;
  let term = x;
  let n = 1;
 
 // Compute additional terms in the Maclaurin series until the magnitude of the current term falls below a certain threshold.
  while (Math.abs(term) > 1e-15) {
    // Update result with the current term.
    result += term;
    // Compute the next term using the formula for the Maclaurin series of arccos(x).
    term = (term * x * x * (2 * n - 1) * (2 * n - 1)) / ((2 * n) * (2 * n + 1));
    n++;
  }
 
  // Return the arccosine of x (in radians).
  return Math.PI / 2 - result;
}

export function abx(a, b, x){
  var result = 1;

  if(x == 0){
      result = 1;
  }
  else if(x < 0){
      for (let i = 0; i > x; i--) {
          result /= b;
        }
  }
  else{
      for (let i = 0; i < x; i++) {
          result *= b;
        }
  }
  return result * a
}