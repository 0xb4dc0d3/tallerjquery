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


    // IDEA: Slide con botones prev/next manual
    $('#slideshow2').cycle({
      fx:'scrollHorz',
      timeout:0
    });

// IDEA: Slide con efecto filmgallery xd
    $('#slideshow3').cycle({
      fx:'scrollHorz',
      speed:3000,
      timeout:1,
      easing:"linear"
    });

    // IDEA: Cortina
    $('#slideshow4').cycle({
      fx:'tileSlide',
      timeout:1,
      speed: 1400
    });

  });
