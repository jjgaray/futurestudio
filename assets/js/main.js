$(document).ready(function(){
	

	$(document).foundation();




	$('#carousel').carouFredSel({
	 	width : '670',
	 	pagination  : ".pagination",
	 	responsive : true,
	 	scroll :{
	 		fx : 'fade',
	 		duration        : 1000,
        	pauseOnHover    : true
	 		
	 	},
	 	items :{
	 		visible : 3,
	 		width : '670'
	 	},
		swipe: {
			onMouse: true,
			onTouch: true
		}
    });





    $('#mean_nav ul li a').click(function(e){
    	e.preventDefault();
    	scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });






    var back_top = $('#back_top');

    back_top.click(function(e){
    	e.preventDefault();
    	scrollTo(0, 900, 'easeInOutCubic');
    	
    });

    function scrollTo(target, speed, ease){
    	$(window).scrollTo(target, speed, {easing:ease});
    }

    $(window).on('scroll', function(){    
	    if($(this).scrollTop()>749)
	    {
	    	back_top.stop().animate({opacity : 1}, 250);
	    }else
	    {
	    	back_top.stop().animate({opacity : 0}, 250);	    
	    }   
    });


    var back_top2 = $('#back_top2');

    back_top2.click(function(e){
    	e.preventDefault();
    	scrollTo(750
    		, 'easeInOutCubic');
    	
    });

    function scrollTo(target, speed, ease){
    	$(window).scrollTo(target, speed, {easing:ease});
    }
 

var x = window.matchMedia("(max-width: 40em)")
myFunction(x)
x.addListener(myFunction)

	function myFunction(x) {
		if (x.matches) {
			$('#carousel').carouFredSel({
		 	width : '670',
		 	pagination  : ".pagination",
		 	responsive : true,
		 	scroll :{
		 		fx : 'fade'
		 	},
		 	items :{
		 		visible : 1,
		 		width : '670'
		 	},
			swipe: {
				onMouse: true,
				onTouch: true
			}
	    });
		}
	}


});


   