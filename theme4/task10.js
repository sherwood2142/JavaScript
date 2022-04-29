// Задание 10
function joinArrays(array1, array2) {
    return [...array1, ...array2];
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let array = input;
    array = array.replace(/[^a-zа-яё,\[\]"]/gi, '');
    array = array.split("],[");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/[^a-zа-яё,"\s]/gi, '').split(",");
    }

    let str = joinArrays(array[0], array[1]).toString();
    str = str.replace(/,/g, ", ");
    console.log(`[${str}]`);
    // console.log(joinArrays(array[0], array[1]));
    rl.close();
});
