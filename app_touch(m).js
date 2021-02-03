/*document.querySelector('.block one').addEventListener("touchstart", myTouch);

function myTouch() {
    
}*/



function startup() {
    var el = document.querySelector(".block one");
    el.addEventListener("touchstart", handleStart, true);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, true);
    el.addEventListener("touchmove", handleMove, true);
    document.querySelector('.out one').innerHTML += 'one';
  }