$(document).ready(function() {
 $(".menu-mobile-button").click(function() {
  $(".menu-mobile").toggle();
  $(".logo").toggle();
  $(".footer-mobile").toggle();
  move();
 });
});
function coming() {
  alert("Coming soon");
}