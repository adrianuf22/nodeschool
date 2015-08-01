var fs = require('fs'),
    countStr = function (err, str) {
        var lines = 0;
        
        if (!err) {
            lines = str.split('\n');
            
            console.log(lines.length - 1);
        }
    };

fs.readFile(process.argv[2], 'utf8', countStr);    