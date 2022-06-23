/*-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/
const rs = require("readline-sync");

let dataAtual = new Date();
let dataEvento = new Date ('2022-06-30');
let qtdeVagas = 50;
let nomeCompleto = "Flavia Lima";


if(dataEvento < dataAtual){
    console.log("Data do evento inválida. O cadastro não poderá ser realizado.");
}else{
    console.log("Bem- vindo a nossa página, por favor preencha os campos solicitados: ", "\n" );
}

let idade = rs.question("Informe a sua idade: " , "\n");

if( idade < 18 || qtdeVagas >100){
    console.log("Cadastro não realizado. Por favor, verifique a idade informada ou a quantidade de vagas disponíveis.");
}else{
    let publico = rs.question("Voce e um participante ou palestrante? ");
        console.log("Bem- vindo (a) " + nomeCompleto);
}

let participantes = ["Joao, Maria, Deisiane, Flávia,"];

let qtdeParticipantes = participantes.length;

for(let i = 0; i < qtdeParticipantes; i++){
    let listaParticipantes = participantes[i];
    console.log("Participantes " + listaParticipantes , "\n");
}

let palestrantes = ["Guilherme José, Maria Fernanda"];

let qtdePalestrantes = palestrantes.length;

for(let i = 0; i < qtdePalestrantes; i++){
    let listaPalestrantes = palestrantes[i];
    console.log("Palestrantes " + listaPalestrantes);
}
