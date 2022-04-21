// const number = document.querySelector('#inputNumb');
const result1 = document.querySelector('#resultTask1');
function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    });

    return sum;
}
result1.textContent = sumArray([4, 6, 16, 73, 5]);

const result2 = document.querySelector('#resultTask2');
function getAboveZero(numbers) {
    return numbers.filter(function (number) {
        return number > 0;
    });
}
result2.textContent = getAboveZero([1, -3, -2, 4, 10]);

const result3 = document.querySelector('#resultTask3');
function getPonies(ponies, findPony) {
    return ponies.find(function (pony) {
        return pony === findPony;
    });
}
result3.textContent = getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'], 'AppleJack');

const result4 = document.querySelector('#resultTask4');
function isTxIncluded(transactions, bk) {
    return transactions.includes(bk);
}
result4.textContent = isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a");

const result5 = document.querySelector('#resultTask5');
function getSizes(strings) {
    return strings.map(function (element) {
        return element.length;
    });
}
result5.textContent = getSizes(["Moscow", "Coding", "School"]);

const result6 = document.querySelector('#resultTask6');
function getWithSpaces(strings) {
    let array = [];
    array.push(strings.join(" "));
    // array.push(array[0].length);
    array.push(strings.join("").length);

    return array;
}
result6.textContent = getWithSpaces(["Moscow", "never", "sleep"]);

const result8 = document.querySelector('#resultTask8');
function getEpisodes({title, episodes}) {
    const anime = {
        title: title,
        episodes: episodes
    };

    return "Аниме " + anime.title + " включает " + anime.episodes + " серий";
}
result8.textContent = getEpisodes({title: "Code Geass", episodes: 25});

const result9 = document.querySelector('#resultTask9');
const triple = (number) => {
    return number * 3;
};
result9.textContent = triple(2);

const result10 = document.querySelector('#resultTask10');
const getAvgGlucose = (checks) => {
    let sum = 0;
    checks.forEach(function (check) {
        sum += check;
    });

    return sum / checks.length;
};
result10.textContent = getAvgGlucose([5.4, 8.1, 6.3, 4.9]);