function largestPrimeFactor(number) {
    if(isPrime(number)) return number;
    return primeFactors(number);
  }
  
  function isPrime(num) {
    if(num <= 3) return true;
    for( let i = 2; i < num; i++) {
      if(num % i === 0) return false;
    }
    return true;
  }
  
  function primeFactors(num) {
    let primeFact;
    for(let i = 2; i < num; i++) {
      if(isPrime(i) && num % i === 0) primeFact = i;
    }
    return primeFact;
  }
  
  largestPrimeFactor(13195);
  