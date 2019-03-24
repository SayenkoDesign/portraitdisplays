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
	
// Download Page Tabs
	var singleProductDownload = $('section.single-product-download');
	
	$(singleProductDownload ).each(function (i, obj) {
		
		var notesButton = $(this).find('.tab-nav .tab-nav-button.release-notes-button');
		var legacyButton = $(this).find('.tab-nav .tab-nav-button.legacy-downloads-button');
		var notesContent = $(this).find('.release-notes.tab-content');
		var legacyContent = $(this).find('.legacy-versions.tab-content');
	
		$(notesButton).addClass('clicked');
		$(notesContent).show();
		$(notesContent).addClass('visible');
		
		$(notesButton).click(function(){
			$(legacyButton).removeClass('clicked');
			$(legacyContent).fadeOut(300).delay(300).hide().removeClass('visible');
			$(this).addClass('clicked');
			$(notesContent).fadeIn(300).addClass('visible');
		});	
		
		$(legacyButton).click(function(){
			$(notesButton).removeClass('clicked');
			$(notesContent).fadeOut(300).delay(300).hide().removeClass('visible');
			
			$(this).addClass('clicked');
			$(legacyContent).fadeIn(300).addClass('visible');
		});	
	
	});



}(document, window, jQuery));


