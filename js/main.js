let input = document.querySelector('#input');
let output = document.querySelector('#output');


let count = 0;
let inputNum = parseFloat(input.value);

update();

function add() {
    count += inputNum;
    update();
}

function subtract() {
    count -= inputNum;
    update();
}

function update() {
    output.innerHTML = count;
    inputNum = parseFloat(input.value);
    console.log(inputNum);
}