var flatten = require("../"),
	assert = require("assert")

describe("Flatten", function() {
	it("should flatten an array (small, manual) and retain order", function() {
		var arr = [ [1, 2, [3] ], 4],
			exp = [1, 2, 3, 4];

		var res = flatten(arr);

		assert.deepEqual(res, exp);
	});

	it("should flatten an array (large, controlled and generated) and retain order", function() {
		var master = [],
			generated = generate(4, 40, master), // Generate an array alongside an array of all elements
			flattened = flatten(generated); // Flatten generated

		assert.deepEqual(master, flattened); // Compare flattened to built master array
	});
});

/**
 * Generate a random array of nested arrays
 * 
 * @param  {number} level The amount of levels to go down.
 * @param {number} maxLength The maximum length of a generated array
 * @param {array} master The master array that contains all non-nested, array values (for comparasion)
 * @return {array}        The generated array of nested arrays
 */
function generate(level, maxLength, master) {
	// Generate the random length of the array and index to insert the array at
	var length = Math.floor(Math.random() * (maxLength || 5)) + 1,
		index = Math.floor(Math.random() * length);

	// Array of random length between 5-10 with numbers increasing linearly
	return Array.apply(null, { length: length }).map(function(v, i) {
		// If we want to insert at this index and we have another level to recur, call generate again reducing the level
		if(i === index && level) return generate(level - 1, maxLength, master)
		else {
			// Otherwise push the value into the master array and return it
			master.push(i);
			return i;
		}
	});
}