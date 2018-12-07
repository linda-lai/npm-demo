const _= require('underscore');

// When required in
// Assumes it is a core module
// File or folder
// Otherwise assumes module exists in node_module folder

const result = _.contains([1, 2, 3], 2)
console.log(result)

// returns true when file is run in Terminal