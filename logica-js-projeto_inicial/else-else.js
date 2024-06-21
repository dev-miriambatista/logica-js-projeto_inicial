


alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = 12;
let chute = prompt(`Escolha um número entre 1 e 20`);

chute = Number(chute);

if (chute == numeroSecreto) {
    alert(`Parabéns você acertou! O número correto é ${numeroSecreto}`);
    //QUANDO UTILIZAR $, SEMPRE USAR CRASE NO LUGAR DE ASPAS 
} else {
    if (numeroSecreto < chute) {
        chute = prompt(`O número é menor que ${chute} tente novamente`);
    } else {
        chute = prompt(`O número é maior que ${chute} tente novamente`);
    }


    if (chute == numeroSecreto) {
        alert(`Parabéns você acertou! O número correto é ${numeroSecreto}`);
    } else {
        if (numeroSecreto < chute) {
            chute = prompt(`O número é menor que ${chute} tente novamente`);
        } else {
            chute = prompt(`O número é maior que ${chute} tente novamente`);
        }


        if (chute == numeroSecreto) {
            alert(`Parabéns você acertou! O número correto é ${numeroSecreto}`);
        } else {
            alert(`não foi desta vez! O número correto é ${numeroSecreto}`);

        }
    }
}


