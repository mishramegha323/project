$('.menu .toggle').on('click', function (ev) {
  ev.preventDefault();
  if ($('.menu').hasClass('active')) {
      $('.menu').removeClass('active');
  } else {
      $('.menu').addClass('active');
  }
});



// 
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      500: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})