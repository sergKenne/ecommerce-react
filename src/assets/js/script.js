import $ from 'jquery';

export function script() {
 
    $(document).ready(function(){
      

        var windowWidth = $(window).width();

        $(window).bind('scroll', function() {

            if ($(window).scrollTop() > 220) {
                $('#mainnav').addClass('navbar-fixed-top');
                $('.nav__list').addClass('nav-position-js');
                $('.nav__logo').addClass('show');
                $('.nav__wrap').addClass('btn-menu-right');
                $('.nav__btn-menu').addClass('wrap-btn-menu-js');
                

            } else {
                $('#mainnav').removeClass('navbar-fixed-top');
                $('.nav__list').removeClass('nav-position-js');
                $('.nav__logo').removeClass('show');
                $('.nav__wrap').removeClass('btn-menu-right');
                $('.nav__btn-menu').removeClass('wrap-btn-menu-js');
              
            }
        });

        //SHOW BASKET AND LIKES

        $('#basket-js').click(function() {
          $('.basket-modal-js').addClass('show');
        });

        
        $('.basket-modal-js').click(function() {
          $('.basket-modal-js').removeClass('show');
        });





        $('#like-js').click(function() {
          
          $('.like-modal-js').addClass('show');
        });

        
        $('.like-modal-js').click(function() {
          $('.like-modal-js').removeClass('show');
        });

        $('.basket-modal__inner').click(function(event) {
          event.stopPropagation();
        });



        //Slide menu


        //if ( windowWidth <= 1200) {

            $('.nav__btn-menu').click(function() {
                $('.nav__list-wrap').addClass('slide-menu-js');
            });
        
            $('.nav__list-wrap').click(function() {
              
                $(this).removeClass('slide-menu-js');
            });
        
            $('.nav__list').click(function(event) {
                event.stopPropagation();
            });
        
          //silde sublist
      
            $('.nav__list-link, .category-js, .nav__sub-link--session').click(function() {
                if( $(this).next().is(":visible") ) {
                  $(this).find('.nav__icon--right').removeClass('rotate-icon-js');
                } else {
                  $(this).find('.nav__icon--right').addClass('rotate-icon-js');
                }

                if(windowWidth <= 1200){
                  $(this).next().slideToggle();
                }
            });

        //}


        $('.deal__tabs').click(function(event) {
          $('.deal__image').attr('src', event.target.src );
        });


        $('.product__tabs-image').hover(function(event) {
          $('.product__image').attr('src',  event.target.src );
        })

      
        // $('.tabs').tabs({
          
        // });




        //tab own script

        $(".tab1").click(function() {
          $(".taBtn").removeClass("active");
          $(this).addClass("active")
          $(".tab1").addClass("active tabOpacity");
          $(".test").removeClass("tabOpacity");
          $(".test1").addClass("tabOpacity");
        });

        $(".tab2").click(function() {
          $(".taBtn").removeClass("active");
          $(this).addClass("active")
          $(".tab2").addClass("active tabOpacity");
          $(".test").removeClass("tabOpacity");
          $(".test2").addClass("tabOpacity");
        });

        $(".tab3").click(function() {
          $(".taBtn").removeClass("active");
          $(this).addClass("active")
          $(".tab3").addClass("active tabOpacity");
          $(".test").removeClass("tabOpacity");
          $(".test3").addClass("tabOpacity");
        });

        $(".tab4").click(function() {
          $(".taBtn").removeClass("active");
          $(this).addClass("active")
          $(".tab4").addClass("active tabOpacity");
          $(".test").removeClass("tabOpacity");
          $(".test4").addClass("tabOpacity");
        })





        $('.your-class').slick({
            dots: true,
            infinite: true,
            //speed: 300,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            //autoplaySpeed: 2000,
            autoplaySpeed: 1000,
            arrows: false,

            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });


          $('.slick-review').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,

            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

          $('.slick-brand').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,

            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  //dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });


    });


}
