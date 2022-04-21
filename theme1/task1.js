function multiply(a, b) {
    return a * b;
}

//readline - модуль для чтения
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
// чтение входных данных и разделение
    num = input.split(" ");

// вывод результата
    console.log(multiply(Number(num[0]), Number(num[1])));
    rl.close();
});