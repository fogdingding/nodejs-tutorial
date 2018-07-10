### 撰寫完小玩意兒 就是該碰碰後端了


+ [參考網站-PSQL中文說明書](https://docs.postgresql.tw/i.-xin-shou-jiao-xue/2.-sql-cha-xun-yu-yan/2.4.-zi-liao-lie-shi-zi-liao-biao-de-zu-cheng-dan-wei)
+ [參考網站-連線教學](https://www.youtube.com/watch?v=joocM70ETMo&t=935s)
+ [參考網站-撰寫API](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WtVbNIhuZPZ)

-----
#### 建立基礎環境

1. 安裝express
```sh
$npm instaall express-generator -g 
```
2. 創立express
```sh
$express [app name]
```
3. 移動到資料夾
```sh
&cd [app name]
```
4. 安裝一些套件
```sh
$npm install
```
-----
###參考影片裡面內容修正

```js
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/puppies';
var db = pgp(connectionString);
```

**首先connectionString 必須改成heroku給的。在修改 var db = pgp(env||connectionString);以及要增加const env=process.env.DATABASE_URL;方可連上去。**

----
#### PS
可以令進行遠端連線至heroku-PSQL
```sh
$heroku pg:psql
```