import $ from "jquery";

export function configSlider() {
  $(".slick-brand").slick({
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".test1").addClass("tabOpacity");

  $(".tab1").click(function () {
    $(".taBtn").removeClass("active");
    $(this).addClass("active");
    $(".tab1").addClass("active tabOpacity");
    $(".test").removeClass("tabOpacity");
    $(".test1").addClass("tabOpacity");
  });

  $(".tab2").click(function () {
    $(".taBtn").removeClass("active");
    $(this).addClass("active");
    $(".tab2").addClass("active tabOpacity");
    $(".test").removeClass("tabOpacity");
    $(".test2").addClass("tabOpacity");
  });

  $(".tab3").click(function () {
    $(".taBtn").removeClass("active");
    $(this).addClass("active");
    $(".tab3").addClass("active tabOpacity");
    $(".test").removeClass("tabOpacity");
    $(".test3").addClass("tabOpacity");
  });

  $(".tab4").click(function () {
    $(".taBtn").removeClass("active");
    $(this).addClass("active");
    $(".tab4").addClass("active tabOpacity");
    $(".test").removeClass("tabOpacity");
    $(".test4").addClass("tabOpacity");
  });

  $(".your-class").slick({
    dots: true,
    infinite: true,
    //speed: 300,
    speed: 800,
    slidesToShow: 4,
    //slidesToScroll: 1,
    slidesToScroll: 3,
    autoplay: true,
    //autoplaySpeed: 2000,
    autoplaySpeed: 3000,
    arrows: false,
    // rtl: true,
    zIndex: 2000,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          //slidesToScroll: 1,
          slidesToScroll: 2,
          infinite: true,
          //dots: true
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-review").slick({
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
          //dots: true
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
