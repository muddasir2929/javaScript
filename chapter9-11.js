// question # 1
// var city;
// city = prompt("Enter your city name");
// if(city == "karachi"){
//     alert("welcom to the city of lights.")
// }

// question # 2
// var gender;
// gender = prompt("Please specify your gender");
// if (gender == "male"){
//     alert("Good Morning Sir!");
// }
// else{
//     alert("Good Morning Ma'am!");
// }

// question # 3
// var signalColor;
// signalColor = prompt("Enter your signal color:");
// if (signalColor == "red") {
//     alert("Must stop!");
// }
// else if (signalColor == "yellow") {
//     alert("Ready to move!");
// }
// else if (signalColor == "green") {
//     alert("Move now!");
// }
// else {
//     alert("You are on the way!");
// }

// question # 4
var remainingFuel;
remainingFuel = prompt("How many liters of fuel are left?");
if (remainingFuel < 0.25){
    alert("Please refill the fuel in your car!");
}
else if (remainingFuel >= 0.25){
    alert("you may have fuel shortage!");
}
else if (remainingFuel >= 2){
        alert("You have enough fuel to drive!");
}
else if (remainingFuel == 4){
    alert("You have surplus fuel in your car!");
}
else {
    alert("You must check feul befor drive!");
}
