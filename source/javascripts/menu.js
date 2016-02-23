$('.menu-icon').click(function() {
  if ( $('.menu-icon').hasClass('fa-bars') ) {
    $('.menu-icon').removeClass('fa-bars').addClass('fa-times');
    $('.sidebar').addClass('active');
    $('.content-wrap-outer').addClass('active');
    $('footer').addClass('active');
    console.log("Hello");
  } else {
    $('.menu-icon').removeClass('fa-times').addClass('fa-bars');
    $('.sidebar').removeClass('active');
    $('.content-wrap-outer').removeClass('active');
    $('footer').removeClass('active');
    console.log("Goodbye");
  }
});
$('#footer-toggle').click(function() {
  $('#footer-toggle').css({"display":"none"});
  $('footer').addClass('toggle');
  var footerHeight = $('footer').outerHeight();
  console.log(footerHeight);
  $('.content-wrap-outer').css({"padding-bottom":footerHeight});
});
$('#footer-close').click(function() {
  $('footer').removeClass('toggle');
  var footerHeight = $('footer').outerHeight();
  $('.content-wrap-outer').css({"padding-bottom":footerHeight});
  $('#footer-toggle').css({"display":"block"});
});

$('a#developer').click(function() {
  console.log("DEVELOPER");
  $('a#designer').removeClass('active');
  $('a#musician').removeClass('active');
  $('a#writer').removeClass('active');
  $(this).addClass('active');
  $('.info-box#designer').removeClass('active').addClass('hide');
  $('.info-box#musician').removeClass('active').addClass('hide');
  $('.info-box#writer').removeClass('active').addClass('hide');
  $('.info-box#developer').removeClass('hide').addClass('active');
});
$('a#designer').click(function() {
  console.log("DESIGNER");
  $('a#developer').removeClass('active');
  $('a#musician').removeClass('active');
  $('a#writer').removeClass('active');
  $(this).addClass('active');
  $('.info-box#developer').removeClass('active').addClass('hide');
  $('.info-box#musician').removeClass('active').addClass('hide');
  $('.info-box#writer').removeClass('active').addClass('hide');
  $('.info-box#designer').removeClass('hide').addClass('active');
});
$('a#musician').click(function() {
  console.log("MUSICIAN");
  $('a#developer').removeClass('active');
  $('a#designer').removeClass('active');
  $('a#writer').removeClass('active');
  $(this).addClass('active');
  $('.info-box#developer').removeClass('active').addClass('hide');
  $('.info-box#designer').removeClass('active').addClass('hide');
  $('.info-box#writer').removeClass('active').addClass('hide');
  $('.info-box#musician').removeClass('hide').addClass('active');
});
$('a#writer').click(function() {
  console.log("WRITER");
  $('a#developer').removeClass('active');
  $('a#designer').removeClass('active');
  $('a#musician').removeClass('active');
  $(this).addClass('active');
  $('.info-box#developer').removeClass('active').addClass('hide');
  $('.info-box#designer').removeClass('active').addClass('hide');
  $('.info-box#musician').removeClass('active').addClass('hide');
  $('.info-box#writer').removeClass('hide').addClass('active');
});
