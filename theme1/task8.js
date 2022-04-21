function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

//readline - модуль для чтения
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
// чтение входных данных и разделение
    let name = input.split(" ");
// вывод результата
    console.log(getName(name[0], name[1]));
    rl.close();
});