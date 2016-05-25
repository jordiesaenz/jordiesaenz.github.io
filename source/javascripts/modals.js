$(function() {

  $( "a#illuminate" ).click(function() {
    $( "div#illuminate" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( "a#cabernet" ).click(function() {
    $( "div#cabernet" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( "a#balboa" ).click(function() {
    $( "div#balboa" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( "a#ogilvy" ).click(function() {
    $( "div#ogilvy" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( "a#mp_page" ).click(function() {
    $( "div#mp_page" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( "a#marketersparadise" ).click(function() {
    $( "div#marketersparadise" ).addClass("display");
    $( ".color-overlay-modal" ).addClass("display");
  });

  $( ".color-overlay-modal" ).click(function() {
    $( ".project-modal" ).removeClass("display");
    $( ".color-overlay-modal" ).removeClass("display");
  });

});
