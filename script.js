let valor1 = document.querySelector('.val1');
let valor2 = document.querySelector('.val2');
let suma = document.querySelector('.suma');
let resta = document.querySelector('.resta');
let multi = document.querySelector('.multiplicacion');
let division = document.querySelector('.division');
let result = document.querySelector('.resultado');

suma.addEventListener("click", () => {
    result.innerHTML = parseFloat(valor1.value) + parseFloat(valor2.value)
});
resta.addEventListener("click", () => {
    result.innerHTML = parseFloat(valor1.value) - parseFloat(valor2.value)
});
multi.addEventListener("click", () => {
    result.innerHTML = parseFloat(valor1.value) * parseFloat(valor2.value)
});
division.addEventListener("click", () => {
    result.innerHTML = parseFloat(valor1.value) / parseFloat(valor2.value)
});