const exec = require('child_process').exec;

//使用ls -alt or Dir 系統指令 去做事情 & 印出。
exec('ls -alt', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});