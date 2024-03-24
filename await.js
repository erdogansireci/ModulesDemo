//Bu örnek fs_module_async örneğindeki nested kısımlar yerine daha
// gerçekçi ve daha iyi yaklaşımlı çözümdür. Gerçekte bu kullanılır
// await kullanımı sadelik açısından daha iyi. Awaitler promise ile kullanılır.

// böyle yapılırsada direk utile bile gerek kalmadan aşağıdaki
// metotlar awaitable olur
//const { readFile, writeFile } = require("fs").promises;

const { readFile, writeFile } = require("fs");

//otomatik promise yapmak için
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


//el ile promise yapma
const getText = (path) => {

    return new Promise((resolve, reject) => {

        readFile(path, "utf8", (err, data) => {

            if (err) {

                reject(err);
                return;
            }

            resolve(data);

        });
    });
};

const start = async () => {
    try {
        const first = await getText("./content/subfolder/first.txt");
        const second = await getText("./content/second.txt");        
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    }
}

//utilde sunulan promisify özelliğinin kullanımı
const start2 = async () => {
    try {

        const first = await readFilePromise("./content/subfolder/first.txt", "utf8");
        const second = await readFilePromise("./content/second.txt", "utf8");
        console.log(first, second);

        await writeFilePromise("./content/writeFilePromiseEx.txt", `writePromise orn ${first} ${second}`);

    }
    catch (error) {
        console.log(error);
    }
}

start();
start2();