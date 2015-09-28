console.log('hello');
$('circle.node').click(function() {
     $(this).toggleClass('.red');
  
     $(this).toggleClass('.blue');
});

$('body').addClass('.red');

$('.animationclicker').click(function() {
     $('circle.node').addClass("blue");
});
$( document ).ready(function() {
    console.log( "ready!" );
    console.log('hello');
    $(this).toggleClass('foo');
});

$('.something').click(function() {
  window.alert(message);
});