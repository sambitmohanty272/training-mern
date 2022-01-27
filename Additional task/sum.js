let arr = [2,4,7,6,9];
let res = 0;
function sum(arr){
    console.log(res);
}
function input(callback){
    for(var i in arr){
        res += arr[i];
    }
    return res;
    callback(res);
}

console.log(input(sum))