/*
Operador lógico 

&& e 
|| ou
! not inverte uma expressão

*/

const comp1 = 10 > 5 && 6 < 10;
console.log(comp1);
console.log(!comp1)
const comp2 = 10 < 4 || 10 > 7;
console.log(comp2)

const nome = "Gabriel";
const idade = 17;

const comp3 = nome === "Gabriel" && idade >= 18;
console.log(comp3);

const acompanhado = true;
const comp4 = idade >=18 || acompanhado;
console.log(comp4);
console.log(idade >= 18)