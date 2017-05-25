'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('Welcome to ES6!');

var add = function add(x, y) {
  return x + y;
};

var Employee = function () {
  function Employee(id, name, salary) {
    _classCallCheck(this, Employee);

    this.__id__ = id;
    this.name = name;
    this.salary = salary;
  }

  _createClass(Employee, [{
    key: 'display',
    value: function display() {
      //console.log('id = ' + this.id + ', name = ' + this.name + ', salary = ' + this.salary);
      console.log('id = ' + this.id + ', name = ' + this.name + ', salary = ' + this.salary);
    }
  }, {
    key: 'id',
    get: function get() {
      console.log('id getter triggered');
      return this.__id__;
    },
    set: function set(value) {
      console.log('id setter triggered with value = ' + value);
      if (value < 0) return;
      this.__id__ = value;
    }
  }]);

  return Employee;
}();

var FullTimeEmployee = function (_Employee) {
  _inherits(FullTimeEmployee, _Employee);

  function FullTimeEmployee(id, name, salary, benefits) {
    _classCallCheck(this, FullTimeEmployee);

    var _this = _possibleConstructorReturn(this, (FullTimeEmployee.__proto__ || Object.getPrototypeOf(FullTimeEmployee)).call(this, id, name, salary));

    _this.benefits = benefits;
    return _this;
  }

  _createClass(FullTimeEmployee, [{
    key: 'display',
    value: function display() {
      console.log('id = ' + this.id + ', name = ' + this.name + ', salary = ' + this.salary + ', benefits = ' + this.benefits);
    }
  }]);

  return FullTimeEmployee;
}(Employee);