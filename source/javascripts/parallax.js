$(window).scroll(function(){
  var clientHeight = $( window ).height();
  var wScroll = $(this).scrollTop();

  $(".parallax-header").css('height', clientHeight);
  $(".parallax-body").css('height', clientHeight);

  $(".snowboarder-1").css({
    'transform' : 'translate(-'+ wScroll * 2.5 +'%, -'+ wScroll * 2.5 +'%)'
  })

  $(".snowboarder-2").css({
    'transform' : 'translate('+ wScroll * 3 +'%, -'+ wScroll * 3 +'%)'
  })

  $(".snowboarder-3").css({
    'transform' : 'translate('+ wScroll * 6 +'%, '+ wScroll * 2 +'%)'
  })

  $(".snowboarder-4").css({
    'transform' : 'translate(-'+ wScroll * 6 +'%, '+ wScroll * 2 +'%)'
  })

  $(".snowboarder-5").css({
    'transform' : 'translate('+ wScroll * 1 +'%, '+ wScroll * 6 +'%)'
  })

});
