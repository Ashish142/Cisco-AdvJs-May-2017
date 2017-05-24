var products = [
	{id : 4, name : 'Pen', cost : 5, units : 20, category : 'stationary'},
	{id : 8, name : 'Pencil', cost : 20, units : 10, category : 'stationary'},
	{id : 2, name : 'Mouse', cost : 100, units : 10, category : 'stationary'},
	{id : 5, name : 'Len', cost : 70, units : 30, category : 'grocery'},
	{id : 6, name : 'Ten', cost : 20, units : 50, category : 'grocery'},
	{id : 3, name : 'Hen', cost : 40, units : 20, category : 'livestock'},
];

/*
sort
filter
all
any
groupBy

min
max
reduce
map
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}





describe('Default List', function(){
	console.table(products);
});

describe('Sort', function(){
	describe('Default Sort [products by id]', function(){
		function sort(){
			//fill in the blanks
		}
		sort();
		console.table(products);
	});

	describe('Any list by any attribute', function(){
		function sort(/* * * */){

		}
		describe('Products by cost', function(){
			//sort();
			console.table(products);
		})
		describe('Products by units', function(){
			//sort();
			console.table(products);
		})
	});
});

describe('Filter', function(){
	describe('All costly products', function(){
		//filter()
		console.table(products);
	});
});








