function timer(n) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log(i*2);
        }, i * n);
    }
}

timer(1000);