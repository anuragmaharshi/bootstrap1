$(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselPause").click(function () {
    $("#mycarousel").carousel("pause");
  });
  $("#carouselPlay").click(function () {
    $("#mycarousel").carousel("cycle");
  });
});
