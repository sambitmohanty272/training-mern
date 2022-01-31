

let result = gen.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = gen.next();
}

makerange();
console.log("The size of sequence created: ", result.value);