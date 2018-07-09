// https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_readfile_path_options_callback 官網的說明文件

//import FS
var fs = require('fs');

fs.readFile('../NPM/package.json', (err, data) => {
  if (err) throw err;
  console.log(data);
  //會發現印出的是buffer
  //更改為data.toString 即可轉換為原本的UTF-8
});

