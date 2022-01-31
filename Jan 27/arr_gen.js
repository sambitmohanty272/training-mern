
var array = ['a', 'b', 'c','d','e'];
function* generator(arr) {
let i = 0;
while (i < arr.length) {
	yield arr[i++]
}
}
let num = parseInt(prompt("Enter the index u want to see"));
const it = generator(array);
for(let i = 0;i<num;i++){
document.write(it.next().value);
document.write("</br>");
}

