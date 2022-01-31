function* makeRangeIterator(start, end, step) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
    document.write(result.value);
    document.write("</br>")
    result = it.next();
}

document.write("size of sequence is : ", result.value); //