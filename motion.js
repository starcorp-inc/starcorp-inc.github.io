function move() {
 var pos = 4;
 var id = setInterval(frame, 1);

 function frame() {
  if (pos == 64) {
   clearInterval(id);
  } else {
   pos += 10;
   $(".menu-mobile").css({
    "top": pos + "px"
   });
  }
 }
}