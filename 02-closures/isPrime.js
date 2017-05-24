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

var isOddOrEven = (function (){

    var map = {};
    
    function checkOddOrEven(n){
    	console.log('processing ', n);
    	return n % 2 === 0 ? 'even' : 'odd';
    }

    return function(n){
        if (typeof map[n] === 'undefined')
            map[n] = checkOddOrEven(n);
        return map[n];
    }
})();


function memoize(fn){
    var map = {};
    return function(n){
        if (typeof map[n] === 'undefined')
            map[n] = fn(n);
        return map[n];
    }
}

var oddOrEven = memoize(function(n){
	console.log('processing ', n);
	return n % 2 === 0 ? 'even' : 'odd';
});

var isPrime = memoize(function(n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var index = 2; index <= (n/2); index++)
        if (n % index === 0){
            return false;
        }
});

function memoize(fn){
    var map = {};
    return function(){
    	var key = JSON.stringify(arguments);
        if (typeof map[key] === 'undefined')
            map[key] = fn.apply(this, arguments);
        return map[key];
    }
}










