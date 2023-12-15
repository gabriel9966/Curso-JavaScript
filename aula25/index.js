let nome = prompt("Digite seu nome :");
window.document.body.innerHTML += `Seu nome é : ${nome}<br>`;
let espacos = nome.split(" ");
let qtdEspacos = (espacos.length - 1);

let nomeAjustado = nome.toLowerCase();
//alert(nomeAjustado);
//nome = nome.toLowerCase();
window.document.body.innerHTML +=  `Seu nome tem ${nome.length - qtdEspacos} letras<br>`;

window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`;

window.document.body.innerHTML += `O primeiro índice da letra A no nome é ${nomeAjustado.indexOf("a")}<br>`;

window.document.body.innerHTML += `O último índice da letra A no nome é ${nomeAjustado.lastIndexOf("a")}<br>`;

window.document.body.innerHTML += `As últimas três letras do nome são ${nome.slice(nome.length -3)}<br>`;//fatia , pega um pedaço dela, usa índice como parâmetro*/

window.document.body.innerHTML += `As palavras do seu nome são ${nome.split(" ")}<br>`;//split divide a string baseado em algo

window.document.body.innerHTML += `Seu nome com letras minúsculas ${nomeAjustado} <br>`;

window.document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}`;
//window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[23]}<br>`;


