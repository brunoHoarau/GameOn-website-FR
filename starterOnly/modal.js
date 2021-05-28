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
const modalClose = document.querySelectorAll(".close");
const checkbox1 = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("btn-submit")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal ))


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "";
}


// Control checkbox general condition + Msg error
const form = document.getElementsByTagName('form')[0];
form.addEventListener('click', () => {
  if(!checkbox1.checked){
    document.getElementById('error-checkbox1').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    document.getElementById('error-checkbox1').classList.add('error-visible');
  } else {
    document.getElementById('error-checkbox1').innerHTML = "";
  }
  
})

// control city choose + msg errror
const radio = document.querySelectorAll('input');
console.log(radio);
