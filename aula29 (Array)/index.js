//Em JavaScript, quando você declara uma variável usando const para um array, o que é constante é a referência à array, não o conteúdo interno do array. Isso significa que você não pode atribuir uma nova array à variável, mas ainda pode modificar o conteúdo da array existente, como adicionar, remover ou modificar elementos.

const lista = ["Gabriel","Luiz","Laura","Paulo"];
lista[0] = "Felipe";
lista[4] = "Lucas";
console.log(lista);
console.log(typeof lista);
console.log(lista[0][0]);//[índice da lista][índice do valor];
console.log(lista[4]);
console.log(lista)
lista[5] = "Junior";
console.log(lista.length)
lista[lista.length ] = "Caio";
console.log(lista);

lista.unshift("Primeiro");//Adiciona no começo
lista.push("ÚltimoElemento");//é usado para adicionar elementos ao final de um array
console.log(lista);

lista.pop();//Tira o último elemento do array
console.log(lista);

lista.shift();//Tira do começo
console.log(lista);

delete lista[1];//Excluí  mas não afeta o índice e o tamanho da lista
console.log(lista);
console.log(lista[1]);

console.log(lista.slice(0,3));
console.log(lista.slice(-3,-1));

console.log("Verifica se é um array :", lista instanceof Array);

let a = [1,2,3,4];
a = 1231;
console.log(a)

