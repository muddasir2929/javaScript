function myFunction() {
    var mydots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (mydots.style.display === "none") {
      mydots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    else {
      mydots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }