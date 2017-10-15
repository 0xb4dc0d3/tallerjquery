//Created by B4DC0D3
//

// vars
let subject = "#subject";
let firstname = "#firstname";
let lastname = "#lastname";
let email = "#email";
let message = "#message";
var collection = new Array(subject, firstname, lastname, email, message);

// IDEA: Crear una validación para el correo con jquery y regular expressions

// -~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#$%//\\



// IDEA: Validar los input según posean la clase o no :P
function withError(e){
    if ($(e).hasClass("is-invalid")) {
      flag = true;
      return flag;
    } else if ($(e).hasClass("is-valid")) {
      flag = false;
      return flag;
    } else {
      flag = true;
      return flag;
    }
}

function ForError(){
  for (var i = 0; i < collection.length; i++) {
    withError(collection[i]);
  }
  return flag;
}
// -~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#$%//\\

// IDEA: Crear un tipo de validación que añada una clase si el campo está vacio o no :).
function validateHighlights() {
  for (var i = 0; i < collection.length; i++) {
    $(collection[i]).on('change focus', function() {
      if ($.trim($(this).val()) == '') {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
      } else if ($(this).val() === 0) {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
      } else {
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
      }
    });
  }
}
// -~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#-~#$%//\\


$(document).ready(function() {
  // Lights on! ;)
  validateHighlights();

  //Submit eventhandler
  $("#form").submit(function(event){
    //checking ¬_¬
    if (ForError()) {
      event.preventDefault();

    } else {
      return;
    }
    event.preventDefault();
  });

});
