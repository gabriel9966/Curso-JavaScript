//Objeto literal
/*Um objeto literal em JavaScript é uma estrutura de dados que organiza informações relacionadas por meio de pares chave-valor, definida de forma direta e concisa usando a notação de chaves {}. As propriedades podem armazenar dados de vários tipos, e métodos (funções) podem ser incluídos para representar comportamentos associados ao objeto. É uma maneira simples de representar e organizar dados no código.*/

const pessoa1 = {
    nome: "Gabriel",
    sobreNome: "Souza",
    idade: 18,
    cor: "Branco",
    apresentacao :function () { console.log(`Sou o ${this.nome} e tenho${this.idade} anos.`)},

    incrementaIdade(){
        this.idade++;
    }
};
console.log(pessoa1.nome);
pessoa1.nome = "Lucas";
console.log(pessoa1.nome);
pessoa1.apresentacao();
pessoa1.incrementaIdade();
console.log(pessoa1);