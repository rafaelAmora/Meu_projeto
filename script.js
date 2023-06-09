// alert('alerta de texto');

const body = document.getElementById("body");/* Busca a id*/ 
const btt = document.querySelector(".button-seta"); /*busca a clss*/ 
const caixa = document.querySelector(".caixa_principal");
const seta = document.querySelector(".button-seta");
const footer = document.querySelector(".footer");
const insta = document.querySelector(".social");
const lista = document.querySelector(".face");



btt.addEventListener('click', () => {
  body.classList.toggle('light'); /*Adiciona a classe*/ 
  caixa.classList.toggle('light'); /*toogle significa trocar */
  seta.classList.toggle('light')
 footer.classList.toggle('light')
 insta.classList.toggle('light')
 lista.classList.toggle('light')
});

console.log(btt); /*Retorno do computador*/