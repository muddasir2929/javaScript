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