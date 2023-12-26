//Uma função executa ações , camelCase
function soma (a,b){
    console.log(a+b);
}

soma(10,9);
//Tudo que está dentro da função pertence a função
function bomDia (nome){//(Parâmetros)
    return "Bom dia "+ nome;
}

console.log(bomDia("Gabriel"));//Executando a função

function bomDia2(nome){
    return console.log(`Bom dia ${nome}`);
}

function soma2 (a = 10,b = 5){
    let menos;
    function soma3 (a , b ){
        menos = a - b;
    }
    soma3(10,2);
    menos+= 1;
    console.log(menos);
    var somas = a + b;
    return somas;
}

soma2(10,55);

//Função anónima

const raiz =  function (num) {
    return num ** 0.5;
};

console.log(raiz(25));

//Arrow  function , Função de seta

const saudacao = () => console.log("Bom dia2");

saudacao();