// CommonJs, every file is module (by default)
// MODULES - Encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utilis");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
