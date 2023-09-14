
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById("IDS");
var modal1 = document.getElementById("MCAutomate");
var modal2 = document.getElementById("Manual");
var modal3 = document.getElementById("Drip");



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }

}

function openModal() { 
    var x = document.getElementById("IDS");
    x.style.display = "block";
}
function closeModal() { 
  var x = document.getElementById("IDS");
    x.style.display = "none";
}


function openModal1() { 
  var x = document.getElementById("MCAutomate");
  x.style.display = "block";
}
function closeModal1() { 
var x = document.getElementById("MCAutomate");
  x.style.display = "none";
}

function openModal2() { 
  var x = document.getElementById("Manual");
  x.style.display = "block";
}
function closeModal2() { 
var x = document.getElementById("Manual");
  x.style.display = "none";
}

function openModal3() { 
  var x = document.getElementById("Drip");
  x.style.display = "block";
}
function closeModal3() { 
var x = document.getElementById("Drip");
  x.style.display = "none";
}
