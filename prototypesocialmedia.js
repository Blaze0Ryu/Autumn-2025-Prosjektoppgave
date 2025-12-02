/*const menyKnapp1 = document.getElementById("meny-knapp2");
const nesteElement = menyKnapp1.nextElementSibling;
console.log(nesteElement);
*/

/*Javscript testing for collabsible containers. Took the code from KKantine.js*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++)
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

/*Alert pop up box testing.*/
function myFunction() {
  var txt;
  if (confirm("This is a wip. Thank you for trying our features out.")) {
    txt = "You have pressed ok.";
  } else {
    txt = "You have pressed cancel.";
  }
  document.getElementById("demo").innerHTML = txt;
}
