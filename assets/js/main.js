
(function () {

 new WOW().init();

 $(document).ready(function(){
   $('.form-group input').focus(function(){
     me = $(this) ;
     $("label[for='"+me.attr('id')+"']").addClass("animate-label");
   }) ;
   $('.form-group input').blur(function(){
     me = $(this) ;
     if ( me.val() == ""){
       $("label[for='"+me.attr('id')+"']").removeClass("animate-label");
     }
   }) ;
   $('#contact-form').submit(function(e){
     e.preventDefault() ;
     alert("Thank you") ;
   })
 });

  particlesJS("particles-js",
      {
          "particles": {
              "number": {
                  "value": 34,
                  "density": {
                      "enable": true,
                      "value_area": 473.51100518494565
                  }
              },
              "color": {
                  "value": "#7ffdff"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 3
                  },
                  "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "enable": false,
                      "speed": 34.083992696287304,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": true,
                      "rotateX": 1281.9177489524316,
                      "rotateY": 2002.9964827381746
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": false,
                      "mode": "repulse"
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200,
                      "duration": 0.4
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true
      });

})();
