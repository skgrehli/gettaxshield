jQuery('document').ready(function(){

	jQuery('.subscription_form').on('submit',function(){

		var email = jQuery('input[name="subscription_email"]').val();
		console.log('Email'+email);

		return false;

	});

	// Progress Bar 
	jQuery('.tab_bar_design li a').on('click',function(){
		jQuery(this).parent().siblings().children().removeClass('active');
		jQuery(this).addClass('active');  
		jQuery('.pb_selectedvalue').text(jQuery(this).data('value'));
	});

	// jQuery('[data-toggle="tooltip"]').tooltip(); 

	jQuery('.call_tracking').on('change', function(){
		jQuery('.calltracking_fields').toggle();
	});

	// Switch
	jQuery('.switch input').on('change', function(){

		if(jQuery(this).prop('checked')) {
			jQuery(this).closest('li').addClass('enabled');
			jQuery(this).closest('li').removeClass('disabled');
		} else {
			jQuery(this).closest('li').removeClass('enabled');
			jQuery(this).closest('li').addClass('disabled');
		}
	});

    var eventInfo = [
         "for modern EROs",
         "be efficient and increase your bottom line",
         "track your referrals",
         "gain full control of your business",
         "track each marketing dollar!",
         "extensive useful reporting ",
         "offer interest free, 0% APR advances to all your customer!",
         "bank level security",
         "use your own funding",
         "for EROs by EROs"
         ];

	 var typed5 = new Typed('#typed5', {
	    strings: eventInfo,
        typeSpeed: 50,
        backSpeed: 40,
        backDelay: 2000,
        loop: true 
	  });
 
	jQuery('.testimonials_slick').slick({ 
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		centerMode: true,
	 	centerPadding: '0',
		slidesToScroll: 2,
		responsive: [ 
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

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