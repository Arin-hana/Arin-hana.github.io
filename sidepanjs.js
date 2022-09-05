/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("sidepannel").style.width = "200px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("sidepannel").style.width = "0";
  } 
  /* hiding navbar*/
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topnav").style.top = "0";
    } else {
      document.getElementById("topnav").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  } 