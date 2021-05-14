// console.log(window.location);

// body.style.color = "blue";

// if (location.pathname == "https://grandcore.org/#/") {
//   $("body").css("color", "red");
//

if (window.location == "https://grandcore.org/#/") {
  console.log(6611);
  var e = document.getElementsByTagName("body")[0];
  console.log(e);
  e.style.cssText = "color:red;";
}

var element = document.getElementById("myDIV");
element.classList.add("mystyle");
