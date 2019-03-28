/*
(function (document, window, $) {

	var controller = new ScrollMagic.Controller();
	

	
$('.pixel-grid').each(function() {
	
	var pixelGridTL = new TimelineMax();
	
	var $pgDuration = 0.25;
	var $pgDelay = '-=0.23';
	
	pixelGridTL
	.to('.pixel-grid-1', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut})
	.to('.pixel-grid-2', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-3', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-4', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-5', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-6', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-7', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-8', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-9', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)
	.to('.pixel-grid-10', $pgDuration, {autoAlpha: 1, ease: Power4.easeInOut}, $pgDelay)


	var pixelGridScene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-200"
	    	}) 
	    	.setClassToggle('in-view')
		.setTween(pixelGridTL)
		.addTo (controller)
		
});		


}(document, window, jQuery));
*/
