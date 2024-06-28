
alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

chute = Number(prompt('Escolha um número de 1 a 100'));
while (chute != numeroSecreto) {
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto < chute) {
            chute = Number(prompt(`O número secreto é menor que ${chute}. Tente novamente`));
        } else {
            chute = Number(prompt(`O número secreto é maior que ${chute}. Tente novamente`));
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

