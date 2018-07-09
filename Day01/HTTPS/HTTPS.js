//import https & fs
const https = require('https');
const fs = require('fs');

//建立SSL機制  
//參考http://blog.kenyang.net/2016/04/16/setting-up-an-https-server-with-nodejs
//1.Creating a private key and CSR
//在create certificate之前，必須要先有private key以及CSR (certificate signing request)，
//所以我們要先generate出private key以及CSR。
//# generate private key
//$ openssl genrsa -des3 -passout pass:kenyang -out server.pass.key 2048
//$ openssl rsa -passin pass:kenyang -in server.pass.key -out server.key
//$ rm server.pass.key

//# generate csr
//$ openssl req -new -key server.key -out server.csr
//2. Creating a certificate
//$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
//輸入以上指令即可成功，但是當中因為openssl 這個工具在微軟裡面並沒有，所以要進行下載
//http://gnuwin32.sourceforge.net/packages/openssl.htm
//並且設定環境變數給他
//變數名稱  OPENSSL_CONF & 變數直  C:\Program Files (x86)\GnuWin32\share\openssl.cnf
//變數名稱 OPENSSL & 變數直 C:\Program Files (x86)\GnuWin32\bin
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

//最後進行驗證的時候，請務必只用 https 進行連接 很容易不小心使用http