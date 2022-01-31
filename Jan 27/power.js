function* powerSeries(number, power) {
    let base = number;
    while (true) {
        yield Math.pow(base, power);
        base++;
    }
}
let power = 2;
let base = 3;
const powersOf2 = powerSeries(base, power);
for (let i = 3; i < 10; i++) {
    document.write(powersOf2.next().value);
    document.write("</br>")
}