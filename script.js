const input = document.getElementById("textarea");
let counter = document.getElementById("counter");
let left = document.getElementById("left");

let char = 0;

const update = () => {
    char = input.value.length;
    counter.innerText = char;
    left.innerText = 200 - char;
};

input.addEventListener("keyup", () => update());

const copy = () => {
    input.select();
    input.setSelectionRange(0, 200);
    navigator.clipboard.writeText(input.value);
};