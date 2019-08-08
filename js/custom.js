jQuery('document').ready(function(){

	 var typed5 = new Typed('#typed5', {
	    strings: ['Think outside the box,', 'Innovate and execute!'], 
	     typeSpeed: 30,
	    backSpeed: 20,
	    smartBackspace: true, // this is a default
	    loop: true
	  });

	jQuery('.testimonials_slick').slick();

	jQuery('.hamburger_sign').on('click',function(){
		jQuery('.hover_menus').toggle();
	});

	jQuery('.hover_menus').hover(function(){
		jQuery(this).show();
	}, function(){
		jQuery(this).hide();
	});  

	jQuery('.three_col_carosusel').slick({ 
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
	 	centerPadding: '0',
		slidesToScroll: 3,
		responsive: [ 
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: true,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

});

 

   
jQuery(window).scroll(function() {    
    if ($(window).width() > 767) {
	   var scroll = $(window).scrollTop();
       if (scroll >= 580) {
	        $("body").addClass("scrolled");
	    } else {
	        $("body").removeClass("scrolled");
	    }
	}  
}); 