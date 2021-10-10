var fs = require('fs');
fs.writeFile('test.txt', 'This File is Update', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
