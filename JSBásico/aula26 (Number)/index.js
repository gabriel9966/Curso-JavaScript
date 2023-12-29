let num1 = 10.69313278271;
let num2 = 2.5;
num1 += 4;
 
let soma = num1 + num2;
console.log(soma.toString() + 100);

console.log("Txt " + num1 + num2 +"txt");//Quando temos uma string ele sempre irá concatenar e não somar , mas se colcocar entra parênteses ele faz a soma.*/

//Se eu quiser alterar o valor da variável para uma string 
//num1 = num1.toString();

console.log("Representação binária :", num1.toString(2));

console.log("Número arredondado :", num1.toFixed(3));//Ele devolve uma string com as casas decimais cortadas

console.log("Num1 é inteiro ??:",Number.isInteger(num1));
console.log(Number.isNaN("55" + 19));
console.log(16+"55");
console.log("55"+15);
console.log("Resultado :",Number.isNaN(66 + "olá"));
console.log(66 + "olá")
console.log(Number.isNaN(66 * "10"));
console.log(66 * "10");

console.log((0.7 + 0.1).toFixed(1) );
console.log("Resultado :",isNaN(66 + "olá"));//