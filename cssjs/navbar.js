//sidenav
function openNav() {
  document.getElementById("sidepannel").style.width = "180px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("sidepannel").style.width = "0";
} 
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}