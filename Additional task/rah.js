function calculateAge(age){
    alert("your age is " + age);
}
function input(callback){
    var age = prompt("Enter ur age");
    callback(age);
}
input(calculateAge);