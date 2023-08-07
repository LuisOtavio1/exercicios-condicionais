const alturaEmCm = 185;

if (alturaEmCm >= 180) {
    if (alturaEmCm <= 185) {
        console.log('Líbero');
    }
    else if (alturaEmCm <= 195) {
        console.log('Ponteiro');
    }
    else if (alturaEmCm <= 205) {
        console.log('Oposto');
    }
    else {
        console.log('Central');
    }
}
else {
    console.log('VOCÊ TEM MENOS QUE 180CM, REPROVADO!!');
}
