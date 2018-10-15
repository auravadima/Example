$(document).ready(function() {
  $('.contacts').mouseenter(function() {
    $('.contacts-popover').fadeIn('800');
  });
  $('.contacts').mouseleave(function() {
    $('.contacts-popover').fadeOut('800');
  });
  $('.contacts').click(function() {
    $('.contacts-popover').fadeIn('800');
    setTimeout(function(){
      $('.contacts-popover').fadeOut('800');
    }, 2000);
  });
  $(document).mousemove(function(e) {
    if (e.pageX < 50) {
      $('.side-menu').addClass('side-menu-opened');
    } else if (e.pageX > 300) {
      $('.side-menu').removeClass('side-menu-opened');
    }
  });
  $('.side-menu:after').click(function(){
    $('.side-menu').addClass('side-menu-opened');
  });
  $('.side-menu_mobile-head_img').click(function(){
    $('.side-menu').toggleClass('opened');
  });
  $('.skill-meter').each(function(){
    var val = $(this).attr('data-value');
    $(this).find('.meter').css('width', val + '%');
  })
});
