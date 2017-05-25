function Employee(id, name, salary){
	if (!(this instanceof Employee))
		return new Employee(id, name, salary);
	
	this.id = id;
	this.name = name;
	this.salary = salary;

	//Not the right way to add a method, but for now it is ok!!
	this.display = function(){
		console.log(this.id, this.name, this.salary);
	};
}