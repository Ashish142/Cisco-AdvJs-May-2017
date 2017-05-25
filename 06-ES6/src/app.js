console.log('Welcome to ES6!');

var add = (x,y) => x + y;

class Employee{
	constructor(id, name, salary){
		this.__id__ = id;
		this.name = name;
		this.salary = salary;
    }
    get id(){
    	console.log('id getter triggered');
    	return this.__id__;
    }
    set id(value){
    	console.log(`id setter triggered with value = ${value}`);
    	if (value < 0) return;
    	this.__id__ = value;
    }
	display(){
		//console.log('id = ' + this.id + ', name = ' + this.name + ', salary = ' + this.salary);
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
    }
}

class FullTimeEmployee extends Employee {
	constructor(id, name, salary, benefits){
		super(id, name, salary);
		this.benefits = benefits;
    }
	display(){
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}, benefits = ${this.benefits}`);
    }
}