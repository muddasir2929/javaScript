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

// var text = "the new york magzine does not allow the pharas world war 02. it should be"
// var indexNum = text.indexOf("world war 02");
// var firstText = text.slice(0, indexNum);
// var replacingText = "the second world war";
// var thirdText = text.slice(indexNum + 12);
// console.log(firstText + replacingText + thirdText);

// var text = "the new york magzine does not allow the pharas world war 02. it should be"
// var indexNum = text.indexOf("new");
// var firstName = text.slice(0, indexNum);
// var replacingText = "modern city of new york";
// var thirdText = text.slice(indexNum + 8);
// console.log(firstName + replacingText + thirdText);

// var firstName = "muhammad";
// var firstChar = firstName.slice(0, 1); slice method
// var firstChar = firstName.charAt(0); charAt method
// var firstChar = firstName.indexOf("a"); finding index number of a string
// var lastChar = firstName.charAt(firstName.length -1)
// console.log(lastChar);

// var val1 = prompt("enter your first value:");
// var signOf = prompt("enter your operator:");
// var val2 = prompt("enter your second value:");
// console.log(val1 + signOf + val2);
// if (signOf === "+"){
//     alert( "The answer is: " + val1+val2);
// }
// else if (signOf === "-"){
//     alert( "The answer is: " + val1-val2);
// }
// else if (signOf === "*"){
//     alert( "The answer is: " + val1*val2);
// }
// else if (signOf === "/"){
//     alert( "The answer is: " + val1/val2);
// }
// else if (signOf === "%"){
//     alert("The answer is: " + ([val1/val2]*100) + "%");
// }


// question # 16
// var university = "university of karachi";
// var arr = university.split(" ");
// alert(arr);

// question # 17
// var username = prompt("enter username");
// var firstText = username.charAt(username.length -1);
// alert( "The last character of username is " + " " + firstText);

// question # 18
// var str = "the quick brown fox jump over the lazy dog.";
// var countNum = (str.match(/the/g)).length;
// alert(countNum);