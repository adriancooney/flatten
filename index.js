/**
 * Take in an bunch of nested arrays and flatten them into a master array.
 *
 * @param {array} array The array of nested arrays
 * @param {array} master The master array to push items into (optional)
 * @return {array} The master, flattened array.
 */
var flatten = function(array, master) {
	// Create a master array if none passed that holds flattened values
	if (!master) master = [];

	// Loop over all the items in a passed array
	for (var i = 0, cache = array.length; i < cache; i++) {
		// If the item is an array, recur over the item passing the static master array
		if (Array.isArray(array[i])) flatten(array[i], master);
		// Otherwise push the value into the master array
		else master.push(array[i]);
	}

	return master;
};

module.exports = flatten;