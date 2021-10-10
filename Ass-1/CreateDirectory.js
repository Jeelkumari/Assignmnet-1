const fs = require('fs');
const a = require('a');
fs.mkdir(a.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});