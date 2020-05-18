import $ from "jquery";

export function script() {
  $(document).ready(function () {
    var windowWidth = $(window).width();

    $(window).bind("scroll", function () {
      if ($(window).scrollTop() > 220) {
        $("#mainnav").addClass("navbar-fixed-top");
        $(".nav__list").addClass("nav-position-js");
        $(".nav__logo").addClass("show");
        $(".nav__wrap").addClass("btn-menu-right");
        $(".nav__btn-menu").addClass("wrap-btn-menu-js");
      } else {
        $("#mainnav").removeClass("navbar-fixed-top");
        $(".nav__list").removeClass("nav-position-js");
        $(".nav__logo").removeClass("show");
        $(".nav__wrap").removeClass("btn-menu-right");
        $(".nav__btn-menu").removeClass("wrap-btn-menu-js");
      }
    });

    //SHOW BASKET AND LIKES

    $("#basket-js").click(function () {
      $(".basket-modal-js").addClass("show");
    });

    $(".basket-modal-js").click(function () {
      $(".basket-modal-js").removeClass("show");
    });

    $("#like-js").click(function () {
      $(".like-modal-js").addClass("show");
    });

    $(".like-modal-js").click(function () {
      $(".like-modal-js").removeClass("show");
    });

    $(".basket-modal__inner").click(function (event) {
      // $('.like-modal-js').addClass('show');
      // $('.basket-modal-js').addClass('show');
      //event.stopPropagation();
    });

    //Slide menu

    //if ( windowWidth <= 1200) {

    $(".nav__btn-menu").click(function () {
      $(".nav__list-wrap").addClass("slide-menu-js");
    });

    $(".nav__list-wrap").click(function () {
      $(this).removeClass("slide-menu-js");
    });

    $(".nav__list").click(function (event) {
      event.stopPropagation();
    });

    //silde sublist

    $(".nav__list-link, .category-js, .nav__sub-link--session").click(
      function () {
        if ($(this).next().is(":visible")) {
          $(this).find(".nav__icon--right").removeClass("rotate-icon-js");
        } else {
          $(this).find(".nav__icon--right").addClass("rotate-icon-js");
        }

        if (windowWidth <= 1200) {
          $(this).next().slideToggle();
        }
      }
    );
  });
}
