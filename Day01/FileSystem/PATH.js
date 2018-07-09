var path = require('path'); // 引入路徑處理模組

var path_a = "FileSystem"; // other 是一個目錄
var path_b = "PATH.js"; // other.txt 是一個存於 other 目錄裡的檔案
var path_resolve = path.resolve(path_a, path_b); // 解析成絕對路徑
console.info(path_resolve);
// C:\Users\fogdi\Desktop\node.js教學日誌\day1\FileSystem\FileSystem\PATH.js

console.info(path.dirname(path_resolve));
// C:\Users\fogdi\Desktop\node.js教學日誌\day1\FileSystem\FileSystem