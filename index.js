showPrimes(20);

//prime numbers cannot be divided by any number except itself

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    //from 2 all the way to current number
    // let isPrime = true;
    // for (let factor = 2; factor < number; factor++) {
    //   if (number % factor === 0) {
    //     isPrime = false;
    //     break;
    //   }
    // }
    // if (isPrime) console.log(number);
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
