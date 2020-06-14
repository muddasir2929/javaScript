// var animalsName;
// animalsName = ["dog", "cat", "mouse", "rabbit", "cow", "hen", "sheep"];
// animalsName.shift();
// animalsName.unshift("horse");
// animalsName.pop();
// animalsName.push("lion", "fox")
// animalsName.splice(3, 2, "deer", "hen")
// animalsName.splice(1, 3, "ass", "hen", "sheep")
// animalsName.splice(2, 0, "pig", "duck")
// animalsName.splice(2, 3)
// document.write(animalsName);

// var variousAnimals; 
// variousAnimals = animalsName.slice(2, 6); // result will be ( mouse, rabbit, cow, hen )
// document.write(variousAnimals);

// var car;
// car = ["mehran", "suzoki", "corola", "gli", "honda", "toyota", "vagonR"];
// car[4] = "landCruser";
// document.write(car);

// question # 1
// let activities = [];

// chapter # 18
var cleanestCities = ["multan", "lahore", "karachi", "islamabad", "peshawar"];
if (citiesToCheck === cleanestCities[0]){
    alert("it is one of the cleanest cities.");
}
else if (citiesToCheck === cleanestCities[1]){
    alert("it is one of the cleanest cities.");
}
else if (citiesToCheck === cleanestCities[2]){
    alert("it is one of the cleanest cities.");
}
else if (citiesToCheck === cleanestCities[3]){
    alert("it is one of the cleanest cities.");
} 
else if (citiesToCheck === cleanestCities[4]){
    alert("it is one of the cleanest cities.");
}
else {
    alert("it is one of the cleanest cities.");
}

// alternative
for (var i = 0; i <= 4; i++){
    if (citiesToCheck === cleanestCities[i]){
        alert("it is one of the cleanest cities of pakistan.");
    }
}
else {
    alert("it is not the cleanest cities of pakistan.");
}