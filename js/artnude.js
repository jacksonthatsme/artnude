$(window).scroll(function(){
		var wh = $(window).height();
		var head = $('header')
		var headHeight = $('header').height();
		var s  = $(window).scrollTop();
		
		if (s > (wh - headHeight)){
			head.addClass('is-fix');
		} else{
			head.removeClass('is-fix');
		}
		
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    prevText: "",
    nextText: ""
  });
});