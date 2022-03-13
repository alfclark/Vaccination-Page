var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  var arrow = document.querySelector('#coll-btn');
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none"; 
      arrow.classList.toggle('fa-rotate-180');
    } else {
      content.style.display = "block";
      arrow.classList.toggle('fa-rotate-180');
    }
  });
}