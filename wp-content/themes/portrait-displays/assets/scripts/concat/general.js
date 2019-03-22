(function (document, window, $) {

	'use strict';

	// Load Foundation
	$(document).foundation();
    
    // Example scroll to element
    /*  
    $('.scroll-next').on('click',function(e){
        
        $.smoothScroll({
            offset: -100,
            scrollTarget: $('main section:first-child'),
        });
    });
    */
    
    // Mobile, allow top lvel menu item to toggle sub menu
    $('li.menu-item-has-children > a').on('click',function(e){
        
        var $toggle = $(this).parent().find('.sub-menu-toggle');
        
        if( $toggle.is(':visible') ) {
            $toggle.trigger('click');
            e.preventDefault();
        }
        
        

    });
    
//     Close Header Alert
	var $topBar = $('#top-bar-message-wrap');

	function setHeight() {
	var barHeight = $($topBar).innerHeight();
	
		$(document).on('click', 'body img.header-alert-close', function() {
			$($topBar).css( 'margin-top', -barHeight).delay(500).fadeOut(0);
		})
	
	};
	setHeight();
	

	




}(document, window, jQuery));


