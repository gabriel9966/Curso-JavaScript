//string
const nome = "gabriel";
console.log("nome :",nome);

//number
const num1 = 10;//number
const num2 = 10.67;//number
console.log(num1);
console.log(num2);

let nome2;//undefinef não aponta para local nenhum na memória, é implicito
console.log(nome2);

let nome3 = null;//não aponta para local nenhum na memória , é explicito
console.log(nome3)

let bool = true;//boolean verdadeiro ou falso
console.log(bool);

console.log("tipo ",typeof bool);
console.log("tipo2 ",typeof nome2);
console.log("tipo3 ",typeof nome3);

//arrays são armazenados por referência , ele armazena uma referência ao abjeto na memória, isso acontece com arrays por serem objetos
const a = [1,2];
const b = a;
b.push(3);
console.log(a,b);