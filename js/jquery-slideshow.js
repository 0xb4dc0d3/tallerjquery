//Crear 4 tipos de slideshow distintos

  $(document).ready(function(){

    // IDEA: Crear slide que se detenga al poner el mouse (on-hover) con efecto fadeout
    $('#slideshow').cycle({
      //BUG: No puedo cambiar esto desde aquí a menos que joda un poco...
      //pause-on-hover:true,
      fx:'fadeout',
      speed:600,
      loader:'wait'
    });


    // IDEA: Slide con botones prev/next
    $('#slideshow2').cycle({
      fx:'fade',
      loader:'wait'
    });

  });
