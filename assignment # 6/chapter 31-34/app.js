// question # 1
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// alert(c);


// qustion # 2
// var monthArr = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
// var rightNow = new Date();
// var theMonth = rightNow.getMonth();
// var nameOfMonth = monthArr[theMonth];
// alert("Current Month: " + nameOfMonth);


// question # 3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// alert("Today is: " + c);

// or

// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is: " + nameOfToday);

// question # 4
// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday === "Sunday"){
//     alert("It's fun today!");
// }
// else {
//     alert("It's working day today!");
// }

// question # 5
// var now = new Date();
// var theDate = now.getDate();
// if (theDate < 16){
//     alert("First fifteen days of the month.");
// }
// else {
//     alert("last days of the month.");
// }

// question # 6
// var now = new Date();
// var millisince = now.getTime();
// alert("Elapsed millisecond since 1 january, 1970: " + millisince);
// alert("Elapsed minutes since 1 january, 1970: " + (millisince)/(1000*60));

// question # 7
// var dt = new Date();
// var hourDayTime = dt.getHours();
// if (hourDayTime < 12){
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }



// question # 8
// var d = new Date();
// d.setFullYear(2020);
// d.setMonth(11);
// d.setDate(31);
// d.setHours(00);
// d.setMinutes(00);
// d.setSeconds(00);
// d.setMilliseconds(000);
// alert("Later Date: " + d);


// question # 9
// var doRam = new Date(prompt("Enter 1st Ramadan Date", "Jan 1, 1970" ));
// doRamMilli = doRam.getTime();
// today = new Date();
// todayMilli = today.getTime();
// diff = todayMilli - doRamMilli;
// accTime = Math.floor(diff/(1000*3600*24));
// alert(accTime + " " + "days have passed since 1st Ramadan, 2020.");

// question # 10
var reffDate = new Date(prompt("Enter 1st Refference Date: "));
var reffMilli = reffDate.getTime();
var reffDateInSec = Math.floor(reffMilli/(1000*60));

var startDate = new Date(prompt("Enter start Date of the year: "));
var startMilli = startDate.getTime();
var startDateInSec = Math.floor(startMilli/(1000*60));
var finalResult = reffDateInSec - startDateInSec;
alert(finalResult);