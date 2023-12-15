let nome = prompt("Digite seu nome :");
window.document.body.innerHTML += `Seu nome é : ${nome}<br>`;
//nome = nome.toLowerCase();
window.document.body.innerHTML +=  `Seu nome tem ${nome.length} letras<br>`;
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`;
window.document.body.innerHTML += `O primeiro índice da letra A no nome é ${nome.indexOf("a")}<br>`;
window.document.body.innerHTML += `O último índice da letra A no nome é ${nome.lastIndexOf("a")}<br>`;
window.document.body.innerHTML += `As últimas três letras do nome são ${nome.slice(nome.length -3)}<br>`;//fatia , pega um pedaço dela, usa índice como parâmetro*/
window.document.body.innerHTML += `As palavras do seu nome são ${nome.split(" ")}<br>`;//split divide a string baseado em algo
window.document.body.innerHTML += `Seu nome com letras minúsculas ${nome.toLowerCase()} <br>`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}`;
//window.document.body.innerHTML += `A segunda letra do seu nome é ${nome[23]}<br>`;


