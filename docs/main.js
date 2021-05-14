// console.log(window.location);

// body.style.color = "blue";

// if (location.pathname == "https://grandcore.org/#/") {
//   $("body").css("color", "red");
//

var e = document.getElementsByTagName("body")[0];

window.addEventListener("hashchange", function (e) {
  console.log("Hash has changed!");
  if (window.location == "https://grandcore.org/#/") {
    e.style.cssText = "color:red;";
  } else {
    e.style.cssText = "color:brue;";
  }
});
