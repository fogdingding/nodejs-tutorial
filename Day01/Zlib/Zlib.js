//import
const zlib = require('zlib');
//原文
const originalText = '我是原文';

//buffer & 印出
const originalBuffer = new Buffer(originalText);
console.log(`original buffer = ${originalBuffer}`);

//壓縮 & 印出
const ziped = zlib.gzipSync(originalBuffer);
console.log(`zip buffer = ${ziped}`);

//解壓縮 & 印出
const unzipBuffer = zlib.unzipSync(ziped);
console.log(`unzip string = ${unzipBuffer.toString()}`);