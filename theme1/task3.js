function getLastLetter(text) {
    return text[text.length - 1];
}

//readline - модуль для чтения
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
// чтение входных данных и разделение
// вывод результата
    console.log(getLastLetter(input));
    rl.close();
});