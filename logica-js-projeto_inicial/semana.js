
//Pergunte ao usuário qual é o dia da semana. 
//Se a resposta for "Sábado" ou "Domingo", 
//mostre "Bom fim de semana!". Caso contrário, 
//mostre "Boa semana!".



let diaDaSemana = prompt ("Que dia da semana é hoje?");

  //if (diaDaSemana === sabado ||domingo){
  if (diaDaSemana.toLowerCase() === "sábado" 
  || diaDaSemana.toLowerCase() === "domingo") {
  alert("Ótimo fim de semana");

} else {
  alert("Ótima semana!");
}

