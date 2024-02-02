//fs (async)

const NEW_LINE = "\n";

const { readFile, writeFile } = require("fs");

console.log("async task started");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {

    //utf8 eklenmezse buffer geliyor, eklenirse text

    if (err) {
        console.log(err);
        return;
    }

    console.log(result);

    const first2 = result;

    readFile("./content/second.txt", "utf8", (err, result2) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log(result2);

        const second2 = result2;

        writeFile("./content/writeExampleAsync.txt", `Here is the result;${NEW_LINE}${first2}${NEW_LINE}${second2}`,
            { flag: 'a' },
            (err, result) => {

                if (err) {
                    console.log(err);
                    return;
                }

                console.log(result);

                console.log("async task finished.");

            }
        );
    });
});

console.log("Realllyy???");