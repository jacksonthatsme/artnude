$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    prevText: "",
    nextText: "",
    slideshow: false,
  });
});


$(function(){
		$('#upcoming-events').upcomingEvents({ 
		  pageSize: 5,
		  orgSlug: 'puppies',
		  apiUrl: 'http://public-api.ticketleap.com/',
		  apiKey: 'PUT_API_KEY_HERE'
		});
					 
});

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

$(document).ready(function(){
  $(".cta").click(function(){
    $("div.more").toggle(500);   
  });
});
$(document).ready(function(){
  $(".cta").click(function(){
    $("div.cta h2").toggle();  
  });
});
