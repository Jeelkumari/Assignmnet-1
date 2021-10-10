var fs = require('fs');
fs.unlink('test.txt', function () {
    console.log('UNLINK operation complete.');
});
