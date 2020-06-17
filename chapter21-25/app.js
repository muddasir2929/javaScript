// var city = prompt("enter your city name.");
// var arr = ["lahore", "karachi", "peshawar"];
// var city = city.toLowerCase();

// for (var i=0; i<=arr.length; i++){
//     if (arr[i] === city){
//         alert("test city found");
//     }
//     else{
//         alert("test city not found");
//     }
//     break;
// }

// question # 1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// alert(fullName);

// question # 2
// var favouritMobile = prompt("enter your favourit mobile name");
// var myFavouritMobile = "My favourit mobile is: " + " " + favouritMobile;
// alert(myFavouritMobile);

// question # 3
// var str = "enter your first name in the input section of the alert window";
// var n = str.indexOf("section");
// alert(n);

// question # 4
// var str = "enter your first name in the input sectio of the alert window";
// var n = str.lastIndexOf("window");
// alert(n);

// question # 5
// var str = "enter your first name in the input sectio of the alert window";
// var n = str.charAt("47");
// alert(n);

// question # 6
// var firstName = ["Muhammad"];
// var lastName = ["Muddasir"];
// var fullName = firstName.concat(lastName);
// alert(fullName);

// question # 7
// var cityName = "Hyderabad";
// var capitalName = cityName.replace("Hyder", "Islam");
// alert(capitalName);

// var firstName = "ahmed ashfaq";
// var secondName = firstName.replace("ahmed", "asad");
// alert(secondName);

// question # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var finalMessage = message.replace(/and/g, "&");
// alert(finalMessage);

// var str = "Mr Blue has blue house and blue car.";
// var res = str.replace(/blue/g, "red");
// alert(res);

// question # 9
// var str = "472";
// var num = parseInt(str);
// alert(num);

// question # 10
// var str = "hello world";
// var res = str.toUpperCase();
// alert(res);

// question # 11
// var str = "javascript!";
// var res = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
// alert(res);

// question # 12
// var num = 123;
// var str = Number(num);
// alert(str);

// question # 13
// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i=0; i<numChars; i++){
//     if (str.slice(i, i+2) === "@"){
//         alert("Please enter valid username!");
//     }
// }

// question # 14
// var str = prompt("Enter some text");
// var numChar = str.length;
// var arr = ["cake", "apple", "cookie", "chips", "patties"];
// for (var i = 0; i < str.length; i++) {
// }

// var text = "the new york magzine does not allow the pharas world war 02. it should be"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "world war 02") {
//         text = text.slice(0, i) + "the second world war" + text.slice(i + 12);
//         console.log(text);
//     }
// }

var text = "the new york magzine does not allow the pharas world war 02. it should be"
var indexNum = text.indexOf("world war 02");
var firstText = text.slice(0, indexNum);
var replacingText = "the second world war";
var thirdText = text.slice(indexNum + 12);
console.log(firstText + replacingText + thirdText);