/*
Primitivos = String, Number,Boolean,Undefined,null (Imutáveis)

Referência (mutável) = array , object , function
*/

let nome = "Gabriel";
nome[0] = 'k';//Não funciona pq a string é imutável
console.log(nome);

let a = 'A';
let b = a ; //Cópia do valor
console.log(a,b);
b = 'B';
console.log(a,b)

let c = [1,2,3];
let d = c ;//referência


d.push(4);

let e = [...c];//está fazendo uma cópia e não referência
c.pop();//remove o último
console.log(c);
console.log(d);
console.log(e);