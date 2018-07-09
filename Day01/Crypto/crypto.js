//import 
const crypto = require('crypto');
//加密使用sha256
const hash = crypto.createHash('sha256');
const text = `今天天氣真好`;

hash.on('readable', () => {
  const data = hash.read();
  if (data){
    //印出原本字體+使用加密法
    console.log(text, 'sha256');
    //印出加密後的DATA
    console.log(data.toString('hex'));
  }
});

hash.write(text);
hash.end();