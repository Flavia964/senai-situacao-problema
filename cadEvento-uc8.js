/*-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/
const rs = require("readline-sync");


let data = new Date();
let dataEvento = new Date ('2022-06-30');
let idade = rs.question("informe a sua idade: ");
let qtdeVagas = 105;
let nome = "Flavia";
let sobrenome ="Lima";
let listaParticipantes = ["Joao, Maria, Deisiane"];
let listaPalestrantes = ["Guilherme José, Maria Fernanda, Deisiane Lima"];
 

if(dataEvento < data){
    console.log("Data do evento inválida.");
}else{
    console.log("Bem- vindo a nossa página, por favor preencha os campos solicitados: ")
}
if( idade <= 18 || qtdeVagas >100){
    console.log("Cadastro não realizado. Por favor, verifique a idade informado ou a quantidade de vagas disponíveis.");
}else{
    let publico = rs.question("Voce e um participante ou palestrante? ");
    console.log("Bem- vindo (a) " + nome + " " + sobrenome);
}
console.log("Lista Participantes: " + listaPalestrantes);
console.log("Lista Palestrantes: " + listaParticipantes);