/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...

let count = n - 1;

if ( (n == 0) || (n == 1) ) {
  return(1)
}

do {
  n = n * count;
  count -= 1;
}
while (count > 1);

return(n);


}
