document.addEventListener("DOMContentLoaded", function() {
//owl-carousel
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        responsiveClass:true,
    })
  });
// burger-menu
  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
  });
// magnific-popup
  $('.image-link').magnificPopup({type:'image'});
  $('.parent-container').magnificPopup({
  delegate: 'div', // child items selector, by clicking on it popup will open
  type: 'image',
  closeOnBgClick: true,
  fixedContentPos: false,
  callbacks: {
    open: function() {
      jQuery('body').addClass('noscroll');
    },
    close: function() {
      jQuery('body').removeClass('noscroll');
    }
  }
  // other options
});
});
