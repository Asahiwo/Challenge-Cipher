function encBtn() {
    const inputText = document.getElementById("input");
    const output = encrypt(inputText.value);
    return document.getElementById("output").value = output;
}

function decBtn() {
    const inputText = document.getElementById("input");
    const output = decrypt(inputText.value);
    return document.getElementById("output").value = output;
}

function encrypt(input) {
    const output = input
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat"); 
    return output;
}

function decrypt(input) {
    const output = input
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    return output;
}

function copyBtn(input) {
    const copy = document.getElementById("output");
    navigator.clipboard.writeText(copy.value);
}