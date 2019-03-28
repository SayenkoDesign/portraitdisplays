/*
(function (document, window, $) {

	var controller = new ScrollMagic.Controller();

// Pixel Grids	
if($('.pixel-grid').is(':visible')) {
	
	$('.pixel-grid').each(function() {
		
		var pixelGridTL = new TimelineMax();
		
		var $pgDuration = 0.4,
		$pgDelay = '-=0.2',
		$pgEase = 'Bounce.easeOut', 
		$pg1 = $(this).find('.pixel-grid-1'),
		$pg2 = $(this).find('.pixel-grid-2'),
		$pg3 = $(this).find('.pixel-grid-3'),
		$pg4 = $(this).find('.pixel-grid-4'),
		$pg5 = $(this).find('.pixel-grid-5'),
		$pg6 = $(this).find('.pixel-grid-6'),
		$pg7 = $(this).find('.pixel-grid-7'),
		$pg8 = $(this).find('.pixel-grid-8'),
		$pg9 = $(this).find('.pixel-grid-9'),
		$pg10 = $(this).find('.pixel-grid-10');
			
		
		pixelGridTL
		.from($pg1, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg2, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg3, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg4, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg5, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg6, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg7, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg8, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg9, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		.from($pg10, 0, {opacity: 0, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})

		
		
		
		
		.to($pg1, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")})
		
		.to($pg2, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg3, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)	
		
		.to($pg4, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg5, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg6, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg7, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg8, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg9, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
		
		.to($pg10, $pgDuration, {opacity: 1, ease: CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1")}, $pgDelay)
	
	
		var pixelGridScene = new ScrollMagic.Scene({
		    triggerElement: this,
		    triggerHook: "onCenter",
		    offset: "-200"
		    	}) 
			.setTween(pixelGridTL)
			.addTo (controller)
			
	});		
};

// fadeInUpClasses
if($('.fadeInUp').is(':visible')) {
		
	
	$('.fadeInUp').each(function() {
		
		var $this = $(this);
		

		var tween = ($(this), 0.3, {y:-24, opacity:1});
	
		var fadeInUp = new ScrollMagic.Scene({
		    triggerElement: this,
		    triggerHook: "onCenter",
		    offset: "-200"
		    	}) 
		    	.setClassToggle('in-view')
			.setTween(tween)
			.addTo (controller)
			
	});		
};




}(document, window, jQuery));
*/




