async function f(){
const mypromise = new Promise(function(Resolve,Reject) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log(i*2);
        }, i * 1000);
    }
});
let res = await mypromise;
console.log(res);
}
f()

 