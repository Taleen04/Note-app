var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 6, letters: 3, // 6 digits and 3 letters for each id
//   store: function(key, ids) { // store the last generated id(each id)
//     db.store(key, ids[ids.length - 1]);//store the last generated id in the database
//   }, // commet it because we need a database
  restore: "AAB - 000" // first id 
});
generator.start();
module.exports = generator;