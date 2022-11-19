$(document).ready(function(){
    $('[data-comments]').slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('[data-services]').slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
});