export function power(base, exponent, precision = 1e-10) {
  // Calculate natural logarithm using the bisection method
  function ln(x) {
    if (x <= 0) {
      throw new Error('Invalid input: x must be positive');
    }

    let lowerBound = 0;
    let upperBound = x > 1 ? x : 1;
    let mid = (lowerBound + upperBound) / 2;

    while (upperBound - lowerBound > precision) {
      let midExp = Math.exp(mid);

      if (midExp === x) {
        break;
      } else if (midExp > x) {
        upperBound = mid;
      } else {
        lowerBound = mid;
      }

      mid = (lowerBound + upperBound) / 2;
    }

    return mid;
  }

  // Calculate e^x using the Taylor series
  function exp(x) {
    let sum = 1;
    let term = 1;

    for (let i = 1; i < 100; i++) {
      term *= x / i;
      sum += term;
    }

    return sum;
  }

  // Calculate the power using the formula base^exponent = e^(exponent * ln(base))
  let power = exp(exponent * ln(base));
  return power;
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

export function sqrt(x) {
  if (x < 0) throw new Error("Cannot take square root of negative number");
  if (x === 0) return 0;
  let guess = x / 2;
  for (let i = 0; i < 10; i++) {
    guess = (guess + x / guess) / 2;
  }
  return guess;
}

export function std(numbers) {
  const n = numbers.length;
  const mean = numbers.reduce((sum, x) => sum + x, 0) / n;
  const squaredDifferences = numbers.map(x => (x - mean) * (x - mean));
  const sumOfSquaredDifferences = squaredDifferences.reduce((sum, x) => sum + x, 0);
  const variance = sumOfSquaredDifferences / n;
  const standardDeviation = sqrt(variance);
  return standardDeviation;
}

/**
* Computes the arccosine of a given input value using the Maclaurin series approximation.
* @param {number} x - The input value (must be between -1 and 1).
* @returns {number} The arccosine of x in radians.
* @throws Throws an error if x is outside the range [-1, 1].
*/

export function arccos(x) {

  const PI = calculatePI()

  console.log(PI)

 // Check that x is within the valid range of -1 to 1.
  if (x > 1 || x < -1) {
    throw "Input value out of range";
  }
 
  // Initialize variables.
  let result = 0;
  let term = x;
  let n = 1;
 
 // Compute additional terms in the Maclaurin series until the magnitude of the current term falls below a certain threshold.
  while (abs(term) > 1e-15) {
    // Update result with the current term.
    result += term;
    // Compute the next term using the formula for the Maclaurin series of arccos(x).
    term = (term * x * x * (2 * n - 1) * (2 * n - 1)) / ((2 * n) * (2 * n + 1));
    n++;
  }
 
  // Return the arccosine of x (in radians).
  return PI / 2 - result;
}

function calculatePI(iterations=1000000) {
  let pi = 0;
  let numerator = 4;

  for (let i = 0; i < iterations; i++) {
    let denominator = 1 + 2 * i;
    let term = numerator / denominator;

    if (i % 2 === 0) {
      pi += term;
    } else {
      pi -= term;
    }
  }

  return pi;
}


export function log(base, number, precision = 1e-10) {
  if (number <= 0 || base <= 0 || base === 1) {
    throw new Error('Invalid input: number and base must be positive and base cannot be 1');
  }

  let lowerBound = -1000;
  let upperBound = 1000;
  let logValue = (lowerBound + upperBound) / 2;
  let currentValue;

  while (upperBound - lowerBound > precision) {
    currentValue = power(base, logValue);

    if (currentValue === number) {
      break;
    } else if (currentValue > number) {
      upperBound = logValue;
    } else {
      lowerBound = logValue;
    }

    logValue = (lowerBound + upperBound) / 2;
  }

  return logValue;
}


export function abx(a, b, x){
  return a * power(b,x)
}
