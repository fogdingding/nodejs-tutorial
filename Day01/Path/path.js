var path = require('path');
var path_a = "path.js"; // other 是一個目錄
var path_resolve = path.resolve(path_a);

//目前路徑+上我替他額外增加的資料夾   ./good/job的感覺。
console.log(path.join(__dirname, 'good', 'job'));

//目前的路徑
console.info(path_resolve);