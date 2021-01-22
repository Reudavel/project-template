console.log("Hello from webpack");
import "./index.scss";//modify to use scss files


//For changue the navbar style on scroll
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if ( currentScrollPos > 75) {
    document.getElementById("navbar").style.backgroundColor = "#007EA7";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
}
