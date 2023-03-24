function power(x, y) {
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

export default power;
