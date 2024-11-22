const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML =
  'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
//
const element = document.getElementById("intro2");
document.getElementById("demo2").innerHTML =
  "The text from the intro paragraph is: " + element.innerHTML;
////////////////////
