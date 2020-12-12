"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});


// This is new 'index.js' javaScript file which is created automatically, 
// after compiling our typeScript code/file using typeScript compiler in our terminal - 'tsc index.ts'
// NOTE: now to run/execute this, we will use regular node command line tool - node index.js 

// Having to run two commands - 'tsc index.ts' & 'node index.js' is painful
// NOTE: Two combine both two commands into ONE, we have installed node module - 'ts-node'
// 'ts-node index.ts' is going to combine above two commands into ONE, so, its going to automatically
// compiled given files & automatically execute result in 'javaScript'
