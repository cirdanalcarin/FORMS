"use-strict";

function baseException() {
    baseException.prototype = new Error();
    baseException.prototype.constructor = baseException;

    baseException.toString = function () {
        return this.name + ": " + this.message;
    }
}

function invalidAccesConstructor() {
    this.name = "invalidAccesConstructor";
    this.message = "Constructor can’t be called as a function.";
}
invalidAccesConstructor.prototype = new baseException();
invalidAccesConstructor.prototype.constructor = invalidAccesConstructor;
invalidAccesConstructor.prototype.toString = function () {
    return baseException.toString.call(this);
}

function uninstantiatedObjectException() {
    this.name = "uninstantiatedObjectException";
    this.message = "Object can´t be instantiated";
}
uninstantiatedObjectException.prototype = new baseException();
uninstantiatedObjectException.prototype.constructor = uninstantiatedObjectException;
uninstantiatedObjectException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function emptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
emptyValueException.prototype = new baseException(); 
emptyValueException.prototype.constructor = emptyValueException;
emptyValueException.prototype.toString = function () {
    return baseException.toString.call(this);
}