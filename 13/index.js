//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.1)
    console.log(`Valor a ser pago: R$${(valorFinal / 100).toFixed(2)}`);
}
else if (tipoDePagamento == "credito") {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log(`Valor a ser pago: R$${(valorFinal / 100).toFixed(2)}`);
}
else if (tipoDePagamento == "cheque") {
    let valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log(`Valor a ser pago: R$${(valorFinal / 100).toFixed(2)}`);
}
else {
    console.log('Tipo de pagamento não reconhecido.');
}

