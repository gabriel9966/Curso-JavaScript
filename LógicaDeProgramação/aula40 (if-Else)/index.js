/*Estruturas condicionais */

const horario = 1;
//Operador de comparação <=


if(horario >=0 && horario <= 11){
    console.log("Bom Dia");

}
else if(horario>11 && horario<=16){//Operados lógico &&
    console.log("Boa Tarde");
}else{
    console.log("Boa Noite");
}

const tenhoGrana = true;
if(tenhoGrana){
    console.log("Vou sair de casa");
}else{
    console.log("Não vou sair de casa");
}