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
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
const checkbox1 = document.getEgitlementById("checkbox1");
const birtD = document.getElementById("birthdate");
const lastName = document.getElementById("last");
const firstName = document.getElementById("first");
const form = document.getElementsByTagName('form')[0];
const modalBody = document.getElementsByClassName('modal-body');
const success = document.getElementById('success');
const br = document.createElement('br');
const radio = document.querySelectorAll('input[name=location]');



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
btnSubmit.addEventListener('click', allControl);


function allControl(){
  // Control checkbox & error msg 
  if(!checkbox1.checked){
    document.getElementById('error-checkbox1').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    document.getElementById('error-checkbox1').classList.add('error-visible');
    document.getElementById('error-checkbox1').appendChild(br);
  } else {
    document.getElementById('error-checkbox1').innerHTML = "";
  }
  
  // Control radioMap & error msg 
  if(radioMap.length === 0){
    document.getElementById('error-radio').innerHTML = "Vous devez choisir une option.";
    document.getElementById('error-radio').appendChild(br);
    document.getElementById('error-radio').classList.add('error-visible');
  } else {
    document.getElementById('error-radio').innerHTML = "";
  }

  // Control birthdate & error msg 
  if ( birtD.value.length < 10 || birtD.value.length >10){
    console.log(birtD.value);
      document.getElementById('error-birthdate').innerHTML = "Vous devez entrer votre date de naissance.";
      document.getElementById('error-birthdate').classList.add('error-visible');
    } else {
      document.getElementById('error-birthdate').innerHTML = "";
    }

    // Control lastname & error msg 
    if(lastName.value.length < 2){
      document.getElementById('error-lastname').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      document.getElementById('error-lastname').classList.add('error-visible');
    } else {
      document.getElementById('error-lastname').innerHTML = "";
    }
    
    
    // Control firstname & error msg 
  if(firstName.value.length < 2){
    document.getElementById('error-firstname').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    document.getElementById('error-firstname').classList.add('error-visible');
  } else {
    document.getElementById('error-firstname').innerHTML = "";
  }

}



// control city choose by radio
const radioMap = [];
radio.forEach( (rd) => rd.addEventListener('click', radioadd) );
  function radioadd(){
    if ( radio.checked = true) {
      const addRadio = radioMap.push(radio);
    }  
}


// Add message success 
form.addEventListener('submit', success);

function validate(form){
  setTimeout(function(){form.submit()}, 3000);
 form.style.display = 'none';
 success.style.display = 'flex';
 return false
}

