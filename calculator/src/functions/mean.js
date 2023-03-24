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
  function mad(numbers) {
    // Calculate the mean of the numbers
    let meanValue = mean(numbers);
  
    // Calculate the absolute deviations from the mean using custom abs function
    let absoluteDeviations = numbers.map(num => abs(num - meanValue));
  
    // Calculate and return the mean of the absolute deviations
    return mean(absoluteDeviations);
}

export default mean;