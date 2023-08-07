const diaDaSemana = 3;

if (diaDaSemana < 1 || diaDaSemana > 7) {
    console.log('O dia da semana informado não é válido.')
} else {
    if (diaDaSemana == 1) {
        console.log('Segunda Feira');
    }
    if (diaDaSemana == 2) {
        console.log('Terça Feira');
    }
    if (diaDaSemana == 3) {
        console.log('Quarta Feira');
    }
    if (diaDaSemana == 4) {
        console.log('Quinta Feira');
    }
    if (diaDaSemana == 5) {
        console.log('Sexta Feira');
    }
    if (diaDaSemana == 6) {
        console.log('Sábado');
    }
    if (diaDaSemana == 7) {
        console.log('Domingo');
    }
}