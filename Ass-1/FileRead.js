var fs = require('fs');
fs.readFile('main.js', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});
console.log("outer");