var babel = require("@babel/core");
const fs = require('fs')
babel.transformFile('src/index.js', {}, function (err, result) {
    console.log('result', result.code);
});

