var { Value } = require('l');

/** @param {Value.String} s */
function length(s) { return new Value.Number(s.value.length); }

/** @param {Value.Tuple} argument */
function sub(argument) {
	/** @type {[Value.String, Value.Tuple]} */
	var [s, range] = argument.element;
	/** @type {[Value.Number, Value.Number]} */
	var [start, length] = range.element;
	return new Value.String(s.value.substr(start.value, length.value));
}

/** @param {Value.Tuple} argument */
function find(argument) {
	/** @type {[Value.String, Value.String]} */
	var [s, t] = argument.element;
	return new Value.Number(s.value.indexOf(t.value));
}

module.exports = new Value.Object({
	length: new Value.NativeFunction(length),
	sub: new Value.NativeFunction(sub),
	find: new Value.NativeFunction(find)
});
