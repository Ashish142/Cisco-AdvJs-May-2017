//isPrime function

function isPrime(n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var index = 2; index <= (n/2); index++)
		if (n % 2 === 0) return false;
	return true;
}


isPrime(100)
isPrime(101)

isPrime(100)