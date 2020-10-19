require(["./vendor/common"], function (multi) {
    new Promise(function (resolve) {
        resolve(1)
    }).then(() => {
        console.log("multi(1, 2) = ", multi(1, 2));
    })
});

const aa = async () => {
    await Promise.resolve(9)
}