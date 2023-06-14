let showMenu = false; // Declaro variable

function showHiddenMenu(){ // Funcion para ocultar y mostrar menu
    console.log("showHiddenMenu function called");
    if (showMenu) {
        document.getElementById("hidden-nav").classList = ""; // Crea la clase "" 
        showMenu = false;
        console.log("Menu hidden");
    } else {
        document.getElementById("hidden-nav").classList = "show-nav"; // Crea la clase "show-menu" 
        showMenu = true;
        console.log("Menu shown");
    }
}

function selection(){ // Funcion oculta menu al seleccionar una opcion
    console.log("selection function called");
    document.getElementById("hidden-nav").classList = "";
    showMenu = false;
    console.log("Menu hidden");
}

$(document).ready(function() {
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
      var typed_strings = $('.typed-text').text();
      var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 50,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
      });
    }
  });
  
