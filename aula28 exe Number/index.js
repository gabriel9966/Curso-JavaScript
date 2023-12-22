let num = prompt("Digite um número");
num = Number(num);
const numTitulo = window.document.getElementById("numero-titulo"); 
const texto = window.document.getElementById("texto");

numTitulo.innerHTML = num;
texto.innerHTML = "";
texto.innerHTML += `<p>A raiz quadrada é ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro :${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN :${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo :${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondando para cima :${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais:${num.toFixed(2)}</p>`;



//Number é um objeto e Math é uma biblioteca
