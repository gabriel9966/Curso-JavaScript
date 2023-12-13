//String , number , undefined

let nome = "Gabriel " ;//String
let sobreNome = "Souza";//String
let nomeCompleto = nome + sobreNome;
console.log(nomeCompleto);
let num1 = 10;//number
let num2 = 10.99;//number
let nomeAluno;//undefined = Não aponta para local nenhum na memória, linguagem automaticamente coloca como esse tipo , não variável não foi definida
let nulo = null //Nulo = Não aponta para local nenhum na memória,Quando eu utilizo nulo eu explicitamente digo que não quero  que aponte para algun lugar na memória

//undefined = quando a variável não é inicializada
//null = quando quero explicitamnete uma variável com valor vazio

let booleano = true;//Valor lógico
let booleano2 = false;//Valor lógico

console.log(typeof booleano , nome);

let u = 99;
console.log(u)
u = "oajds";
console.log(u);

/*Referência, os array na verdade apontam para o mesmo espaço na memória */

arr1 = [1,2]
arr2 = arr1;
console.log(arr1,arr2);

arr2.push(3);

console.log(arr1,arr2);

/*------------------------------------*/
/*Aqui não é uma referência , aqui é uma cópia */
f = 10 ;
e = f;
console.log(f,e);

e = 99;
console.log(f,e);