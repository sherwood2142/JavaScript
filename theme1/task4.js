function notFirstLetter(text) {
    return text.substring(1);
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
    console.log(notFirstLetter(input));
    rl.close();
});