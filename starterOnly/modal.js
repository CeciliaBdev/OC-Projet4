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
//le formulaire
const formulaire = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
//la modale
const btnclose = document.querySelector(".close");
const modal = document.querySelector(".modal-body");
const button = document.querySelector(".button");
const message = document.getElementById("confirm");
message.style.display = "none";


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// --- Issue 1: close the modal
//variable btnclose : croix de la modale
btnclose.addEventListener('click', () => {
  //au click sur la croix, la modale passe en display:none pour disparaitre
  modalbg.style.display="none";
  //reset des input
  formulaire.reset();
  //enleve la classe erreur si input non remplit
  formData.forEach(function (userItem) {
    userItem.removeAttribute('data-error-visible')
  });
})


//conservation des données en cliquant sur le bouton submit
//annule le changement de page
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  //variables entrées formulaire
  let firstName = document.getElementById("first")
  let lastName = document.getElementById("last")
  let email = document.getElementById("email")
  let birthDate = document.getElementById("birthdate")
  let tournamentNumber = document.getElementById("quantity")
  let buttons = document.getElementsByName("location")
  let cgvChecked = document.getElementById("checkbox1")

  let error = 0
  //test validité des champs input
  if (!firstNameValidate(firstName)){
    error++;
  }
  if (!lastNameValidate(lastName)){
    error++;
  }
  if (!emailValidate(email)){
    error++;
  }
  if (!birthDateValidate(birthDate)){
    error++;
  }
  if (!numberTournamentValidate(tournamentNumber)){
    error++;
  }
  if (!chooseLocation(buttons)){
    error++;
  }
  if (!cgvValidate(cgvChecked)){
    error++;
  }
  //si un champ présente une erreur : error++
  if (error != 0){
    console.log("erreur")
  }

  //à la suite les uns des autres pour avoir l'ensemble des erreurs si aucun champ rempli
  //si pas d'erreurs: champs disparaissent
  else{
    formData.forEach(function (userItem) {
      userItem.remove()
    });
    message.style.display="block"
    button.value = "Fermer";
    button.addEventListener('click', () => {
      modalbg.style.display="none";
      location.reload();
    })
    btnclose.addEventListener('click', () => {
      location.reload();
    })
    }
})

//Issue 3
//Mes fonctions de validation des input
function firstNameValidate (field){
  const regex = /^[A-zÀ-ú-]{2,}$/

  if (regex.test(field.value)===false){
    formData[0].setAttribute('data-error', 'Le champ "Prénom" est incorrect');
    formData[0].setAttribute('data-error-visible', 'true');
    return false
  }else{
    formData[0].removeAttribute('data-error');
    formData[0].removeAttribute('data-error-visible');
    return true;
  }
}
function lastNameValidate (field){
  const regex = /^[A-zÀ-ú-]{2,}$/
  if (regex.test(field.value)===false){
    formData[1].setAttribute('data-error', 'Le champ "Nom" est incorrect');
    formData[1].setAttribute('data-error-visible', 'true');
    return false
  }else{
    formData[1].removeAttribute('data-error');
    formData[1].removeAttribute('data-error-visible');
    return true;
  }
}
function emailValidate (field){
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/
  if (regex.test(field.value)===false){
    formData[2].setAttribute('data-error', 'Le champ "Email" est incorrect');
    formData[2].setAttribute('data-error-visible', 'true');
    return false
  }else{
    formData[2].removeAttribute('data-error');
    formData[2].removeAttribute('data-error-visible');
    return true;
  }
}
function birthDateValidate (field){
  if (field.value === ""){
    formData[3].setAttribute('data-error', 'Entrez votre date de naissance');
    formData[3].setAttribute('data-error-visible', 'true');
    return false
  }else{
    formData[3].removeAttribute('data-error');
    formData[3].removeAttribute('data-error-visible');
    return true;
  }
}
function numberTournamentValidate (field){
  if (field.value === ""){
    formData[4].setAttribute('data-error', 'Entrez un nombre de tournoi');
    formData[4].setAttribute('data-error-visible', 'true');
    return false
  }else{
    formData[4].removeAttribute('data-error');
    formData[4].removeAttribute('data-error-visible');
    return true;
  }
}
function chooseLocation(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    //si un bouton est coché
    if (buttons[i].checked) {
      formData[5].setAttribute("data-error-visible", "false");
      return true;
    }
  }
  formData[5].setAttribute("data-error-visible", "true");
  formData[5].setAttribute("data-error", "Choisissez un tournoi");
  return false;
}
function cgvValidate (field){
  if (field.checked){
    //console.log("coché")
    formData[6].removeAttribute('data-error');
    formData[6].removeAttribute('data-error-visible');
    return true
  }else{
    //console.log("non coché")
    formData[6].setAttribute('data-error', 'Vous devez lire et acceptez les termes et conditions.');
    formData[6].setAttribute('data-error-visible', 'true');
    return false;
  }
}




////2.2.1: champ prénom : min 2 caractères/pas vide
//validation selon une expression régulière
//utilisation de la regex:
// regex: ^[A-zÀ-ú-]{2,}$
// caractère a-z avec accent et tiret (pour prenom composé)
//pris en compte ancre de début ^(début de la ligne)
// andre de fin $ : fin de ligne

//2.2.2 même chose pour le champ nom de famille: min 2 caractères / pas vide

//2.2.3: adresse email valide
//attribut type:email
// regex email: ^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$
// caractère alphanumerique (sans accent) avant et après le "@" et le point
//min 2 charcatères

//2.2.4: nb de tournoi type number
// entre 0 et 99 avec min=0 et max=99

//2.2.5: 1 bouton radio est selectionné
//dans ma fonction validate() : au moins 1 boouton est selectionné

//2.2.6 : les cgv sont cochés
// dans l'input checkbox: l'attribut "checked" est rajouté pour le 1er + attribut "required" pour valider le formuliare, pour le 2e ni requis ni coché d'avance



//
// const validation = [firstNameValidate(firstName),lastNameValidate(lastName),emailValidate(email), birthDateValidate(birthDate),numberTournamentValidate(tournamentNumber),chooseLocation(buttons),cgvValidate(cgvChecked)]

// validation.forEach(validation =>  {
//   if(!validation){
//     error++;
//   }