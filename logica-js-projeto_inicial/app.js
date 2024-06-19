alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto){
   alert(`Parabéns você acertou! O número correto é ${numeroSecreto}`); 
   // QUANDO UTILIZAR $, SEMPRE USAR CRASE NO LUGAR DE ASPAS 
}else{
    alert("Poxa, não foi desta vez");
}
