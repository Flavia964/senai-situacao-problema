/*Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retorna os seguintes resultados:
* Se o número for par, escreva 'par' e o número correspondente.
* Se o número for ímpar, escreva 'ímpar' e número correspondente.
* Se o número for zero, escreva 'zero' e número correspondente.
*/

let alunoPresentes = 25;

for (let i = 0; i <= alunoPresentes; i++){
    if(i == 0) {
        console.log("Zero " + i);
    }else{
    if(i % 2 == 0) {
        console.log("Par " + i);
    }else{
        console.log("impar " + i);
    }
}
}
