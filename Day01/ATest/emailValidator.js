//import 
//validator 驗證工具 檢驗有沒有一些符合字串之類的。
const validator = require('validator');
const url = require('url');

const onRequest = (request, response) => {
  console.log(`now in worker ${process.pid}`);
  response.writeHead(200, {"Content-Type": "text/plain"});
  //解析出email的位子
  var email = url.parse(request.url, true).query.email;
  //如果傳入的email是為真的話...否...
  if (email && validator.isEmail(email)) {
    response.write(`${email} is correct email form.`);
  } else {
    response.write('please input correct email in query string, eg: ?email=cjiaojce@gmail.com');
  }
  response.end();
};
//建立自訂模組 onRequest
module.exports = onRequest;