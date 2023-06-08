// alert('alerta de texto');

const body = document.getElementById("body");
const btt = document.querySelector(".button-color");
const caixa = document.querySelector(".caixa_principal");

btt.addEventListener('click', () => {
  body.classList.toggle('light');
  caixa.classList.toggle('light');
});

console.log(btt);