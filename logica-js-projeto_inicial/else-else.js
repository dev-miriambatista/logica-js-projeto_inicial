


alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = 12;
let chute ;
let tentativas  = 1


while (chute != numeroSecreto) {
    //enquanto(while) o chute não for o numero correto, continuar(!) tentando.

    if (chute == numeroSecreto) {
        alert(`Parabéns você acertou com ${tentativas} tentavivas! O número correto é ${numeroSecreto} `);
        //QUANDO UTILIZAR $, SEMPRE USAR CRASE NO LUGAR DE ASPAS 
    } else {
        if (numeroSecreto < chute) {
            chute = prompt(`O número é menor que ${chute} tente novamente`);
        } else {
            chute = prompt(`O número é maior que ${chute} tente novamente`);
        }
        if (chute == numeroSecreto) {
            alert(`Parabéns você acertou com ${tentativas} tentavivas! O número correto é ${numeroSecreto} `);
    }
    tentativas++
}
}
