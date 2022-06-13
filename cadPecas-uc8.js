/*Se a peça possuir um peso superior a 100gramas, pode cadastrar.
  Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
  Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.*/

  let nomePeca = "Alarme";
  let pesoPeca = 250;
  let listaPecaQtd = 11;

  if (pesoPeca > 100) {
    console.log("Peso da peça superior a 100g. Peça cadastrada.");
  }else{
    console.log("Peso da peça inferior a 100g. Não cadastrada.");
  }
  if (listaPecaQtd > 10) {
    console.log("Capacidade da caixa insulficiente.");
  }
  if (nomePeca.length < 3) {
    console.log("Nome inválido. Digite no mínimo 3 caracteres");
  }else{
    console.log("Peça cadastrada.");
  }
  


   
  