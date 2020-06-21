// question # 1
// function displayTime(){
//     var timePkT = new Date();
//     alert(timePkT);
// }
// displayTime();

// <optional>
// function tellTime(){
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: " + theHr + ":" + theMin);
// }
// tellTime();

// question # 2
// function userName(){
//     var firstName = "Muhammad ";
//     var secondName = "Muddasir ";
//     var fullName = firstName + secondName;
//     alert("Hi" + " " + fullName);
// }
// userName();

// question # 3
// function sumNum(){
//     var a = parseInt(prompt("enter first number: "));
//     var b = parseInt(prompt("enter second number: "));
//     var c = a + b;
//     alert(c);
// }
// sumNum();


// question # 4
// function calc(num1,opr,num2){
//     if (opr === "+"){
//         return num1 + num2
//     }
//     else if (opr === "-" ){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//         return num1 * num2
//     }
//     else if (opr === "/"){
//         return num1 / num2
//     }
//     else {
//         return "incorrect operator!"
//     }
// }
// var result = calc(5, "+", 3);
// var result2 = calc(5, "-", 3);
// var result3 = calc(5, "*", 3);
// var result4 = calc(6, "/", 3);

// alert(result);
// alert(result2);
// alert(result3);
// alert(result4);

// question # 5
// function sqFunc(x){
//     return x * x
// }
// var result = sqFunc(4);
// alert(result);


// question # 6
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert(factorial(5));

// question # 7
// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }
// var result = range(5, 25);
// alert(result);


// question # 8
// function pythagorean(sideA, sideB) {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
// alert(pythagorean(8, 6));


// question # 9
// function myFunction() {
//     var length = prompt("Enter a whole number for the length of your rectangle.");
//     var width = prompt("Enter a whole number for the width of your rectangle.");
//     var depth = prompt("Enter a whole number for the depth of your rectangle prism");

//     var perimeter = (2 * length) + (2 * width);
//     var area = length * width;
//     var volume = length * width * depth;

//     return "Area of rectangle:" + area
//     return "Area of rectangle:" + perimeter
//     return "Area of rectangle:" + volume
// }
// var result = myFunction();
// alert(result);

// question # 10
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    var result = palindrome("madam");
//    alert(result);


// question # 11



// question # 12

// question # 13

// question # 14