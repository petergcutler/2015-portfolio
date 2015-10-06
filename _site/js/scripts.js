$(function() {
  $('.icon').click(function() {

    if($('.nav-block').is(':visible')) {
      $('.nav-block').removeClass('showitems');
    }
    else {
      $('.nav-block').addClass('showitems');
    }
 });
});
