var fs = require('fs'),
    buffer = fs.readFileSync(process.argv[2]),
    str = buffer.toString(),
    lines = str.split(/\n/);

console.log(lines.length - 1);