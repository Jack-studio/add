let a = document.querySelector('.block_one').addEventListener("touchstart", myTouch);
let b = document.querySelector('.block_two').addEventListener("touchstart", myTouch1);

function myTouch() {
    if (a = true) {
    document.querySelector('.out_one').innerHTML += 'one';
} 
}
function myTouch1() {
if (b = true) {
    document.querySelector('.out_one').innerHTML += 'two';
}
    }



/*function startup() {
    var el = document.querySelector(".block one");
    el.addEventListener("touchstart", handleStart, true);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, true);
    el.addEventListener("touchmove", handleMove, true);
    
  }*/