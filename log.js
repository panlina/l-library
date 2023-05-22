var { Value } = require('l');

/** @param {Value} value */
function log(value) {
	switch (value.type) {
		case 'string': console.log(value.value); break;
		default: console.log(value); break;
	}
}

module.exports = new Value.NativeFunction(log);
