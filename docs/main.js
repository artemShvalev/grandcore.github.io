// console.log(window.location);

// body.style.color = "blue";

// if (location.pathname == "https://grandcore.org/#/") {
//   $("body").css("color", "red");
//

// var x = document.getElementsByTagName("body")[0];

// if (window.location == "https://grandcore.org/#/") {

//   window.addEventListener("hashchange", function (e) {
//     console.log("Hash has changed!");
//       x.style.cssText = "color:red;";
//     }

// }
// else {
//     x.style.cssText = "";
//   };

if (location.pathname == "https://grandcore.org/#/") {
  $("body").css("color", "red");
}

$(window).bind("hashchange", function () {
  console.log("Hash has changed!");
});
