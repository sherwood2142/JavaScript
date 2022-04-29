// Задание 7
function deleteUserRole(roles) {
    roles.splice(0, 1);
    return roles;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let roles = input.split(" ");
    console.log(deleteUserRole(roles));
    rl.close();
});