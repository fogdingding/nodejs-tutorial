//建立變數buf接到二進位的原始數據。

var buf = new Buffer("Simply Easy Learning", "utf-8");
// 打入 buf即可列印出下列文字
//<Buffer 53 69 6d 70 6c 79 20 45 61 73 79 20 4c 65 61 72 6e 69 6e 67>
// 打入 buf.toString() 則可印出下列文字
//'Simply Easy Learning'