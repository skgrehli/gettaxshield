jQuery('document').ready(function(){

	jQuery('.subscription_form').on('submit',function(){

		var email = jQuery('input[name="subscription_email"]').val();
		console.log('Email'+email);


		var notification = '<div class="alert alert-success m-0 r_3 text-center">Thank you for subscribing our latest updates.</div>';
		jQuery('.subscription_notifications').html(notification);  

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
		"Intuitive Tax Software",
		"Referral Software",
		"Text Message",
		"Pre-season Assistance",
		"Pre-ack Advances",
		"Top Notch Support",
		"Call Tracking"
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
		dots: true,
		prevArrow: false,
		nextArrow: false,
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


    $requestDemoForm = $("#requestDemoForm");
    $rd_submit = $("#rd_submit");
    if($requestDemoForm && $rd_submit) {
        $rd_submit.click(function() {
            $rd_submit.attr("disabled", "disabled");
            if($("#downloadDemo p.alert")) {
                $("#downloadDemo p.alert").remove();
            }
            $requestDemoForm.submit();
        })
        $requestDemoForm.submit(function() {
            $.ajax( {
                type: "GET",
                url: 'https://app.gettaxshield.com/api/request_download_demo',
                data: $requestDemoForm.serialize(),
                dataType: "json",
                success: function( response ) {
                    $rd_submit.removeAttr("disabled");
                    // SUCCESS
                    $(".modal").scrollTop(0);
                    $response = $("<p>", {class: "alert alert-success", role: "alert"});
                    $response.html("<strong>Your request has been sent.</strong> Please check your email for a link to download the software. Thank you!");
                    $("#downloadDemo .modal-body p").remove();
                    $("#downloadDemo .modal-body").prepend($response);
                    $requestDemoForm.remove();
                    $rd_submit.remove();
                    $(".modal-footer button[data-dismiss=modal]").html("Close");
                },
                error: function( response ) {
                  $rd_submit.removeAttr("disabled");
                    // SUCCESS
                    $(".modal").scrollTop(0);
                    $response = $("<p>", {class: "alert alert-success", role: "alert"});
                    $response.html("<strong>Your request has been sent.</strong> Please check your email for a link to download the software. Thank you!");
                    $("#downloadDemo .modal-body p").remove();
                    $("#downloadDemo .modal-body").prepend($response);
                    $requestDemoForm.remove();
                    $rd_submit.remove();
                    $(".modal-footer button[data-dismiss=modal]").html("Close");
                }
            });
            return false;
         });

    }
    function displayErrorRD() {
        $rd_submit.removeAttr("disabled");
        $(".modal").scrollTop(0);
        $response = $("<p>", {class: "alert alert-danger", role: "alert"});
        // FAILURE
        $response.html("<strong>There was an error with your request.</strong> Please complete all required fields and try again. Thank you.");
        $("#downloadDemo .modal-body").prepend($response);
    }


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