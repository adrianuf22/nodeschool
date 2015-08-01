var fs = require('fs'),
    path = require('path'),
    pathName = process.argv[2],
    extension = process.argv[3],
    listDir = function (err, list) {
        var acceptedFiles = [];
        if (!err) {
            var fExt = '';
            
            for (var ix = 0; ix < list.length; ix += 1) {
                fExt = path.extname(list[ix]).replace('.','');

                if (fExt === extension) {
                    console.log(list[ix]);
                }
            }
        }
    };
                
fs.readdir(pathName, listDir);