var age = prompt("enter your age");
if(age > 21 && age < 74){
    alert("you can come in");
}
else if(age > 18 && age < 21){
    alert("Come on in (but no drinking)!");
}
else if(age > 75 && age <= 100){
    alert("Are you sure you want to be here?");
}
else{
    alert("You're too young to be in here!");
}