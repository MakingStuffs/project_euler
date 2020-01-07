function largestPrimeFactor(number) {
    // Set the starting prime
    let prime = 2,
        rtn = 1;
    // Initiate a loop which will only run while
    // prime is less than number
    while (prime <= number) {
        // Check that the current prime is a factor of the current number
        number % prime === 0 ?
            // if it is set the return value to the current prime
            (rtn = prime,
                // Then decrement the initial number so we can start from there
                // on the next run
                // If it isn't factor increment the current prime
                number /= prime) : prime++;
    }
    // Return the final value.
    return rtn;
}

largestPrimeFactor(13195);