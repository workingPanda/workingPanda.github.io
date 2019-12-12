let y = prompt('Unesi broj bacanja');
let numTim = 0;
let totalDice = [];
while (numTim < y) {
    currentDice = Math.floor(Math.random() * 6 + 1);
    totalDice.push(currentDice);
    numTim++
}
// let x = 1;
// while (x < 7) {
//     console.log(`${x+0}: ` + totalDice.filter(item => item === x).length / y*600 + '%');
//     x++
// }

let x = 1;
while (x < 7) {
    var kocka = totalDice.filter(item => item === x).length / y*600;
    var redni = x+0;
    // console.log(redni);
    // console.log(kocka);
    document.getElementById("kocke" + redni).value = kocka;
    document.getElementById("kocke" + redni).name = redni;
    document.getElementById("kockice" + redni).innerHTML = redni +': ' +kocka+'%';
    document.getElementById("kocak").innerHTML = 'Broj bacanja: ' +numTim+' puta';
    x++

    
}