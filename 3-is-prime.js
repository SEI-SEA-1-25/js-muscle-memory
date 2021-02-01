/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
  // divide the number by all the numbers leading up to it
  // if any of those return a whole number, no it is not prime
  // if we get this far without a NO, then YES
}

primesUnderHundo = []
for (let i = 0; i < 100; i++) {
  if (isPrime(i)) {
    primesUnderHundo.push(i)
  }
}




