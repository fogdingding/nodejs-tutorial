### 今天是一個要撰寫一個小玩意兒的日子
**畢竟前端、後端不是一個可以慢慢寫的行業。**
-----
**首先這次我們會使用到以下的幾個東西**

1. [git](https://github.com/fogdingding/github/blob/master/day1.md)
2. [node.js](https://github.com/fogdingding/nodejs-tutorial/tree/master/Day01)
3. [express](https://github.com/fogdingding/nodejs-tutorial/tree/master/Day02)
4. [heroku](https://www.heroku.com/)
5. [PostgreSQL](https://github.com/fogdingding/nodejs-tutorial/tree/master/Day04)
6. [Postman](https://www.getpostman.com/)
###### 第6點，postman是一個好用的工具，可以在開發的時候，用各種get、post等等型態傳送看看，用以驗證沒有問題。
-----
### heroku-從頭上架
[參考網站-影片解說](https://www.youtube.com/watch?v=Lo-PP6cUO7c&t=5144s)

1. 先使用指令 安裝簡單的express版本
```sh
$npm install -g express-generator
```
###### 這樣就會多一個指令 express

2. 建立一個express 專案 //使用express --help 可以看到參數使用
```sh
$express  --git -c sass .
```
###### 這樣就能建立在此目錄底下的專案了。

3. 然後就必須進行安裝 把相關套件裝入 
```sh
$npm install
``` 
###### //記得要在專案裡面的地方執行哦(cd進入資料夾)

4. 打入指令 測試一下有沒有裝成功
```sh
$npm start
```
###### 在瀏覽器上輸入127.0.0.1:3000 如果出現Welcome to Express，表示成功

5. 建立一個可以讓git去追蹤的檔案
```sh
$git init 
```
###### 要CD進入資料夾哦~~

6. 讓heroku 知道現在要對應的APP名稱

```sh
$heroku git:remote -a express-heroku-test01
```

7. 加入所有檔案 
```sh
$git add .
```

8. 確認所有檔案，準備傳送
```sh
$git commit -m "version1.0.0"
```

9. 上傳所有檔案進行版本更新
```sh
$git push heroku master。
```

10. 這個指令可以用來刪除目前的remote git
```sh
$git remote rm heroku
```
----
##### 如果想要換專案上傳
[網站參考](http://djangogirlstaipei.herokuapp.com/tutorials/deploy-to-heroku/?os=windows)

1. 先查詢有哪些APP專案
```sh
$heroku apps
```

2. 把要得專案名稱COPY 貼上
```sh
&heroku git:remote -a [apps name]
```

3. 進行檢查 
```sh
$git remote -v 
```
