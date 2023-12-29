const nome = "Gabriel";
const peso = 85;
const altura = 1.70;

const imc = peso/ (altura**2);
console.log(imc);

if (imc <= 18.5){
    console.log("Abaixo do peso")
}else if(imc >18.5 && imc <25){
    console.log("Peso ideal");
}else if (imc >= 25 && imc < 30){//Operador de comparação, e operador lógico &&
    console.log("Acima do peso");
}else if (imc >= 30 && imc < 35){
    console.log("Obesidade grau 1");
}else if (imc >= 35 && imc < 40){
    console.log("Obesidade grau 2");
}else if(imc > 40 ){
    console.log("Obesidade Mórbida")
}else{
    console.log("Valor inválido")
}