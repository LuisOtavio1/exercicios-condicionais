const ladoA = 3;
const ladoB = 3;

if ((ladoA < 0 || ladoB < 0) || (ladoA > 6 || ladoB > 6) ) {
    console.log('Essa peça não existe!');
} else {
    if (ladoA === ladoB) {
        console.log('É uma bucha');
        } else {
            console.log('Não é uma bucha');
        }
    }

