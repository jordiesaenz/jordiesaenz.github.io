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
