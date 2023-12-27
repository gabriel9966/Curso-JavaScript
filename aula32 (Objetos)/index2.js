function criaObjeto (arr,nome,idade,sobreNome){//parâmetro

    arr.push({nome: nome,idade:idade,sobreNome: sobreNome});

    return arr;

}

arr1 = [];
//parâmetro é o que eu espero , argumento é o que eu passo
criaObjeto(arr1,"Gabriel",18,"Souza");//Argumento
let a = criaObjeto(arr1,"Lucas",20,"Martins");

console.log(a);
console.log(arr1);