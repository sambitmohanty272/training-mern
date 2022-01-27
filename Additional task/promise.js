const mypromise = new Promise(function(Resolve,Reject) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log(i*2);
        }, i * 1000);
    }
});
mypromise.then(function(value){
    console.log(value);
})

 