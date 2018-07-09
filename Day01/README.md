### 第一天，就亂學亂學吧
----

#### [NPM (Node Package Manager)](https://www.npmjs.com/)

npm init
告訴NPM這是一個需要被管理的資料夾，之後會產生出一個packge.json的文件包，裡面就會有專案名稱，版本...等資訊

npm search <description>
搜尋關鍵字的工具包，會有各種相關關鍵字的工具包，基本上應該是熱度高往熱度低排序吧。

npm install -g http-server
存在共同的資料夾(就是所有使用者都可以使用)

npm install --save express
存在我這個專案的資料夾

npm ls -g
顯示目前有安裝的工具包(屬性是Groups)

npm ls --save
顯示目前有安裝的工具包(此專案的)

npm info [options]
在[]裡面打入你想查詢的工具包，可以去查詢這個工具所有的版本資訊。

npm install --save [optiongs]@[version]
在[]裡面打入想安裝的工具包名稱，以及版本即可安裝。

這邊在安裝的時候，有時候版本資訊前面會顯示 @ ~ ^ ，表示其他使用者在安裝的時候，會依據下列不同性質而安裝不同版本。
@ 1.2.3 (只安裝此版本)
~ ~1.2.3 will match all 1.2.x versions but will miss 1.3.0. 
^ ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

npm-check
可以去查詢，目前所安裝的版本是不是最新的版本。
如果沒有檔案即可打指令做安裝 npm install -g 

npm uninstall [options]
如果你要解除安裝的話~~~ 但是如果原本有+上 --save的話 就要把它也加上去，如 npm uninstall --svae express。

-g --save 這部分要怎麼決定?
通常如果是指令的話，你就安裝-g吧，如果不是通常就會安裝在專案就好，因為她不是command。

----
#### [Cmder](http://cmder.net/)

**Cmder is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start.**

----
### 其他的就列點吧

+ [參考網站-概念解說PPT](https://hackmd.io/p/HJLDexl9x#/)
+ [參考網站-概念解說影片](https://www.youtube.com/watch?v=5bnABCa1qEs)
+ [參考網站-code範例程式碼](https://github.com/chnbohwr/nodejs_tut)

1. [REPL Terminal]()
2. [NPM]()
3. [Callbacks]()
4. [Event]()
5. [File System]()
6. [http]()
7. [https]()
8. [Cluster]()
9. [Module]()
10. [net]()
11. [concole 印出...]()
12. [crypto 加密]()
13. [Url 結構化找出information]()
14. [Zlib 壓縮]()
15. [Child Process 執行系統指令]()






