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
2
