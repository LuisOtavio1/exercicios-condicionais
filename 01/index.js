const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 == "pedra") {
    if (jogada2 == "tesoura"){
        console.log(`A jogada vencedora foi ${jogada1}`);
    }
    else if (jogada2 == "papel") {
        console.log(`A jogada vencedora foi ${jogada2}`);
    }
    else {
        console.log('Empate');
    }
}
else if (jogada1 == "papel") {
    if (jogada2 == "tesoura"){
        console.log(`A jogada vencedora foi ${jogada2}`);
    }
    else if (jogada2 == "pedra") {
        console.log(`A jogada vencedora foi ${jogada1}`);
    }
    else {
        console.log('Empate');
    }
}
else if (jogada1 == "tesoura") {
    if (jogada2 == "papel"){
        console.log(`A jogada vencedora foi ${jogada1}`);
    }
    else if (jogada2 == "pedra") {
        console.log(`A jogada vencedora foi ${jogada2}`);
    }
    else {
        console.log('Empate');
    }
}
