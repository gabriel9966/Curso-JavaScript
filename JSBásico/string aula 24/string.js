let umaString = "Umm \"texto\"";// \ = escapa o caractere 
console.log(umaString)
console.log("A primeira letra é :" + umaString[0] + " e a segunda letra é " + umaString.charAt(1));
console.log(`A última letra é :${umaString[8]}`);

console.log("Qual o índice da palavra texto :",umaString.indexOf("texto"));

console.log(umaString.lastIndexOf("m"));
console.log(umaString.indexOf("m"));

console.log(umaString.replace("Umm","Outra"));

let frase = "O rato roeu a roupa do rei de roma";

console.log(frase.slice(2,6));//Ele retorna uma fatia do texto
console.log(frase.slice(7));//incluído
console.log(frase.slice(-7));//incluído
console.log(frase.slice(-11, -5 ));//valor incluído , excluído
console.log(frase.slice(-2));//incluído
console.log(frase.length);
console.log(frase.slice(32));

let nome = "Gabriel";//0123456
console.log(nome.length)
console.log(nome.slice(-2));//-1,-2
console.log(nome.slice(5))//5,6
console.log(nome.slice(1))


console.log(frase.split(" ")); //Divide a string pelo parâmetro passado