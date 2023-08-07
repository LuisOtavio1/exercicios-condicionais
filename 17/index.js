//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago == (valorDoProduto / 100)) {
    console.log('Você já pagou tudo! ');
} else {
    let valorDoProdutoReal = valorDoProduto / 100;
    let valorDaParcela = valorDoProdutoReal / quantidadeDoParcelamento;
    let valorRestante = valorDoProdutoReal - valorPago;
    let parcelasRestantes = valorRestante / valorDaParcela;
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDaParcela}`);
}