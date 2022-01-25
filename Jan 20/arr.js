function exp(arr){
    // adding an element to the end of an array.
     arr.push("12");
     //add items to the beginning of our array.
     arr.unshift("16");
     // remove first element from the array.
     arr.shift();
     //remove the last element from the array.
     arr.pop();
     return arr;
}
var arr = ["3","5","7","1","2"];
console.log(exp(arr));
// cocate all the elements of an array to string.
console.log(arr.join(""));
