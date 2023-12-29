/*
Operador lógico 

&& e  false && true -> false "Retorna o valor mesmo"
|| ou false || true -> true "Retorna o valor mesmo"
! not inverte uma expressão

*/

/*Se todos os operandos em uma expressão lógica forem avaliados como verdadeiros no caso do operador && (E lógico), ou todos os operandos forem avaliados como falsos no caso do operador || (OU lógico), o valor retornado será o último valor avaliado. */

console.log("Maria" && 0 &&"Lucas" && false);//Ele devolve o primeiro elemento qe seja considerado false e já descarta os outros

console.log("Maria" && true && "Lucasl");

/*
false = valor literal
Valores FALSY = Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.
0
"" = String vazia
null / undefined
NaN
*/

/*Curto circuito */
/*
As expressões de curto-circuito referem-se ao comportamento dos operadores lógicos (&& e ||) em algumas linguagens de programação, incluindo JavaScript. O termo "curto-circuito" significa que a avaliação da expressão pode ser interrompida assim que o resultado final for determinado, sem a necessidade de avaliar todos os operandos.
*/

console.log("" || NaN || false || 0 || "Gabriel" ||true);

/*Truthy */
/*
true: O valor booleano verdadeiro.
1: Um número diferente de zero.
"qualquer coisa": Uma string com pelo menos um caractere.
[]: Um array vazio.
{}: Um objeto vazio.
*/

//No operador lógico || (OU lógico) em JavaScript, se todas as expressões (operandos) são avaliadas como "falsy" (ou seja, consideradas como false em um contexto booleano), o operador retorna o valor do último operando.