function getHTML(titleOne, titleTwo) {
    return `<div>
  <h1>${titleOne}</h1>
  <h2>${titleTwo}</h1>
</div>`;
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let titles = input.split(" ");

    console.log(getHTML(titles[0], titles[1]));
    rl.close();
});