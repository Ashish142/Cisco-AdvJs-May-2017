//isPrime function

function isPrime(n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var index = 2; index <= (n/2); index++)
		if (n % 2 === 0) return false;
	return true;
}

//public cache
function isPrime(n){
	if (typeof isPrime.map === 'undefined')
		isPrime.map = {};
	var map = isPrime.map;
    if (typeof map[n] !== 'undefined')
        return map[n];
    console.log('processing ', n);
    map[n] = true;
    for(var index = 2; index <= (n/2); index++)
        if (n % index === 0){
            map[n] = false;
            break;
        }
    return map[n];
}


//private cache
var isPrime = (function (){
    var map = {};

    function isPrime(n){
        if (typeof map[n] !== 'undefined')
            return map[n];
        console.log('processing ', n);
        map[n] = true;
        for(var index = 2; index <= (n/2); index++)
            if (n % index === 0){
                map[n] = false;
                break;
            }
        return map[n];
    }
	return isPrime;
})();


var isPrime = (function (){

    var map = {};
    
    function checkPrime(n){
    	console.log('processing ', n);
    	if (n <= 3) return true;
    	for(var index = 2; index <= (n/2); index++)
            if (n % index === 0){
                return false;
            }
    }

    return function(n){
        if (typeof map[n] === 'undefined')
            map[n] = checkPrime(n);
        return map[n];
    }
})();




