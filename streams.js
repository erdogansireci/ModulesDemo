// writeable, readable, duplex, transform

//okunacak data inanılmaz buyuk diyelim o durumlarda fileread memoryi
//doldurur veya uygulamayı kitler. Burada streamler devreye girer ve
//data parça parça alınabilir (parçalı download, upload gibi aynı)


// create big file
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//     writeFileSync("./content/bigFile.txt", `hello ${i}\n`, { flag: "a" });
// }

const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt");

//default 64kb
//last buffer - remainder
//heghWaterMark - control size
//const stream = createReadStream("./content/bigFile.txt", { highWaterMark: 90000 });
//const stream = createReadStream("./content/bigFile.txt", { encoding: "utf8" });

stream.on("data", (result) => {// burdaki data eventi streamin içinde tanımlı, kafamıza göre data denmedi oraya. nodejs documantation içinde deatlyar mevcut
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});

var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    //böyle yaparsak tüm data birden gönderilmeye çalışılır.
    //bu sıkıntı response hepsi bitmeden ulaşmaz
    // aşağıdaki açık olan örnek daha iyi, data clienta chunklar
    // olarak ulaşır
    // const text = fs.createReadStream("./content/bigFile.txt", "utf8");
    // res.end(text);

    const fileStream = fs.createReadStream("./content/bigFile.txt", "utf8");
    fileStream.on("open", () => {
        fileStream.pipe(res);//read streami write streame iletir.
    });
});

//64kb lik chunklar halinde data okundu burda
// 64kb + 43kb iki chunk geldi

