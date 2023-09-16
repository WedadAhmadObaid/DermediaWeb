// function myFunction() {
//     document.getElementById("onclickhide").style.display = "block";
//     document.getElementById("img1-sec2").style.display = "block";
//     document.getElementById("img12-sec2").style.display = "none";
//   }


  function myFunction() {
    var a = document.getElementById("p0-img");
    var x = document.getElementById("onclickhide");
    var y =document.getElementById("img1-sec2");
    var z = document.getElementById("img12-sec2");
    if (x.style.display == "none" && y.style.display == "none" && z.style.display == "block") {
      x.style.display = "inline";
      y.style.display = "block";
      z.style.display = "none";
      a.style.width = "285%"
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
    }
  }
  
  