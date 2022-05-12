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
//données formulaires
const formData = document.querySelectorAll(".formData");
//le formulaire
const formulaire = document.querySelector("form");
//bouton close modal
const btnclose = document.querySelector(".close");
//id:first : input prenom
const firstname = document.getElementById('first');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// --- Issue 1: close the modal
//variable btnclose : croix de la modale
btnclose.addEventListener('click', () => {
  // console.log("click");
  //au click sur la croix, la modale passe en display:none pour disparaitre
  modalbg.style.display="none";
})

// --- Issue 2: Implémenter entrée du formulaire
//2.1 : html label / attribute for

//2.2 : Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

function validate() {
  let isValid = true //variable formulaire valide
  let isChecked = false //variable checkbox cochée

  //pour chaque element
  formData.forEach((el) => {

    //ici mes elements: les input
    el.querySelectorAll('input').forEach((inputEl) => {

      //si mon input est vide
      if(inputEl.value === "") {
        isValid = false
      }
      //il faut au moins 1 tournoi sélectionné
      if(inputEl.getElementsByClassName("checkbox-input") && inputEl.getAttribute("name") === "location" && inputEl.checked === true) {
        isChecked = true
      }
    });

  });

  if(isValid === false) {
    alert("Formulaire incomplet")
  } else if(isChecked === false){
    alert("Choisissez un tournoi")
  } else {
    alert("Formulaire valide - Envoyé")
  }

}

//2.2.1: champ prénom : min 2 caractères/pas vide
//validation selon une expression régulière
//utilisation de la regex: 
// regex: ^[A-zÀ-ú-]{2,}$
// caractère a-z avec accent et tiret (pour prenom composé)
//pris en compte ancre de début ^(début de la ligne)
// andre de fin $ : fin de ligne

//2.2.2 même chose pour le champ nom de famille: min 2 caractères / pas vide

//2.2.3: adresse email valide
//attribut type:email 

//2.2.4: nb de tournoi type number
// entre 0 et 99 avec min=0 et max=99

//2.2.5: 1 bouton radio est selectionné
//dans ma fonction validate() : au moins 1 boouton est selectionné

//2.2.6 : les cgv sont cochés
// dans l'input checkbox: l'attribut "checked" est rajouté pour le 1er + attribut "required" pour valider le formuliare, pour le 2e ni requis ni coché d'avance


//conservation des données en cliquant sur le bouton submit
//annule le changement de page
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
})



