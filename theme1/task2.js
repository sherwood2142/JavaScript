function myName(name) {
    return name.toUpperCase();
}

//readline - модуль для чтения
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
// чтение входных данных и разделение
    name = input;

// вывод результата
    console.log(myName(name));
    rl.close();
});