//Create an object and assign it to a variable called 'spinner'
var spinner = /* **** */


/*
The spinner object must exhibit the following behavious

spinner.up(); //=> 1
spinner.up(); //=> 2
spinner.up(); //=> 3
spinner.up(); //=> 4

spinner.down(); //=> 3
spinner.down(); //=> 2
spinner.down(); //=> 1
spinner.down(); //=> 0
spinner.down(); //=> -1

The varible used the track the value should NOT be accessible from outside the spinner object
*/

//Revealing Module Pattern
function spinnerFactory(){
	//state
	var counter = 0;

	//behaviours
	function increment(){
		return ++counter;
	}

	function decrement(){
		return --counter;
	}

	return {
		up : increment,
		down : decrement
	};
}

var spinner = spinnerFactory();









