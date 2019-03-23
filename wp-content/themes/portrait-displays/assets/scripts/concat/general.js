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
    
// Close Header Alert
	var $topBar = $('#top-bar-message-wrap');

	function setHeight() {
	var barHeight = $($topBar).innerHeight();
	
		$(document).on('click', 'body img.header-alert-close', function() {
			$($topBar).css( 'margin-top', -barHeight).delay(500).fadeOut(0);
		})
	
	};
	setHeight();
	
// Add Active to Values Modal Dot Nav
	
/*
$('input[type="radio"]').change(function () {
    // Get Choice for Application
    var application = $('input[name="application"]:checked').prop('id') || '';
  
    // Get all tr's with the selected data-app
    var $trs = $('tr[data-app="'+application+'"]');
  
    // Add your class
    $trs.addClass('highlight');
  
    // Remove the class from all other tr's
    $('tr').not($trs).removeClass('highlight');
});
*/




	
/*
	var modalID = $('.value-reveal-modal').attr('id');
		    console.log(modalID);
	
	if ($('#value-modal-dot-nav button').data("open") === modalID) {
	    $('#value-modal-dot-nav button').addClass('active');
	}
*/


/*
$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
	var modalID = $(this).attr(modalID);
	
		    console.log("loaded");
	
	
		if ($('#value-modal-dot-nav button').data("open") === modalID) {
	    $('#value-modal-dot-nav button').addClass('active');
	    }
	
});
*/


/*
$(document).on('open.fndtn.reveal', '[data-reveal]', function(){
console.log('test');
});
*/

/*
$('#value-3').bind('opened', function() {
  console.log("myModal opened");
});
*/


}(document, window, jQuery));


