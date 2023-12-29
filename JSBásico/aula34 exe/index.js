function meuEscopo(){
    const form = document.querySelector(".form");//Seleciona com o mesmo seletor do css
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    /*form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
    };*/

    function recebeEvento(evento){
        evento.preventDefault();// usado em JavaScript para cancelar a ação padrão associada a um evento.
        
        const nome = form.querySelector(".nome");
        const sobreNome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({Nome :nome.value ,SobreNome : sobreNome.value,Peso : peso.value,Altura:altura.value});
        
        resultado.innerHTML +=  (`<p>nome :${nome.value}  sobreNome : ${sobreNome.value}  peso : ${peso.value}  altura:${altura.value}</p>`)

    }
    form.addEventListener("submit",recebeEvento);// é um método em JavaScript que permite a você associar uma função, conhecida como manipulador de eventos, a um determinado evento em um elemento HTML. 

}
meuEscopo();

