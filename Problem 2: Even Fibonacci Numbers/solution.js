function fiboEvenSum(n) {
    let evens = [], a = 1, b = 2;
    for(let i = 1; i < n; i++) {
      if(b % 2 === 0) evens.push(b);
      let nextFib = a + b;
      a = b;
      b = nextFib;
    }
    return evens.reduce((acc, curr) => {
    return acc + curr;
    })
  }
  fiboEvenSum(10);