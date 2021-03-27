var imgSlider = simpleslider.getSlider({
  container: document.getElementById("myslider"),
  prop: "none",
});
document.getElementById("prev").onclick = function () {
  imgSlider.prev();
};
document.getElementById("next").onclick = function () {
  imgSlider.next();
};
