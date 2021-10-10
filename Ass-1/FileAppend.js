var fs = require('fs');
fs.appendFile('test.txt', ' This File Is Example of Append file', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
