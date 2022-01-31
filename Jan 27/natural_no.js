function * nextNatural()
{
    var naturalNumber = 1;
  
    while (true) {
        yield naturalNumber++;
    }
}
let num = parseInt(prompt("Enter number"));
const res = nextNatural(num);
for (var i = 0; i < num; i++) {
  
    document.write(res.next().value);

    document.write("<br>");
}