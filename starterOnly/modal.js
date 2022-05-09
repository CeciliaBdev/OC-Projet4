function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// --- Issue 1: close the modal
//variable btnclose : croix de la modale
const btnclose = document.querySelector(".close");
btnclose.addEventListener('click', () => {
  // console.log("click");
  //au click sur la croix, la modale passe en display:none pour disparaitre
  modalbg.style.display="none";
})



