(function (document, window, $) {

var controller = new ScrollMagic.Controller();

var body = $('body');

// Monitor Image
if($('.hero-right-img-wrap > img').is(':visible')) {
	
	var $heroIMG = $('.hero-right-img-wrap');

	var scene = new ScrollMagic.Scene({
	        triggerElement: body,
	        triggerHook: "onLeave",
	        duration: 800
	})
	.setTween($heroIMG, {x:100, opacity: 0})
	.addTo(controller);
	
};


// Right Fins
/*
var rightFins = $('img#header-right-fins');
if($(rightFins).is(':visible')) {
	
	var tl = new TimelineMax();
	
	tl
	.fromTo(rightFins, 3, {x:'70%', scale: 0.2, opacity:0}, {x:'0%', scale: 1, opacity:1, ease: Power3.easeIn}, '-=2' )
	
	var scene = new ScrollMagic.Scene({
	        triggerElement: '.hero-content-half h1',
	        triggerHook: "onLeave",
	        offset: 50
	})
	.setTween(rightFins, 3, {x:'100%', scale: 0, ease: Power3.easeIn})
	.addTo(controller);
	
	
	
};
*/


// Pixel Grids	
var $pixelGrid = $('.pixel-grid');
if(($pixelGrid).is(':visible')) {
	
	$($pixelGrid).each(function() {
		
		var pixelGridTL = new TimelineMax();
		
		var $pgDuration = 0.275,
		$pgDelay = '-=0.2',
		$pgEase = CustomEase.create("custom", "M0,0,C0.124,0.262,0.156,0.48,0.182,0.604,0.218,0.778,0.248,0.963,0.256,1,0.264,0.985,0.338,0.712,0.362,0.642,0.398,0.532,0.492,-0.013,0.5,0,0.552,0.096,0.631,0.251,0.638,0.268,0.706,0.422,0.762,0.579,0.796,0.634,0.806,0.65,0.836,0.72,0.874,0.792,0.906,0.844,0.936,0.884,0.98,0.962,0.993,0.986,1,1,1,1"), 
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
		.from($pg1, 0, {opacity: 0, ease: $pgEase})
		.from($pg2, 0, {opacity: 0, ease: $pgEase})
		.from($pg3, 0, {opacity: 0, ease: $pgEase})
		.from($pg4, 0, {opacity: 0, ease: $pgEase})
		.from($pg5, 0, {opacity: 0, ease: $pgEase})
		.from($pg6, 0, {opacity: 0, ease: $pgEase})
		.from($pg7, 0, {opacity: 0, ease: $pgEase})
		.from($pg8, 0, {opacity: 0, ease: $pgEase})
		.from($pg9, 0, {opacity: 0, ease: $pgEase})
		.from($pg10, 0, {opacity: 0, ease: $pgEase})
		.to($pg1, $pgDuration, {opacity: 1, ease: $pgEase})
		.to($pg2, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg3, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)	
		.to($pg4, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg5, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg6, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg7, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg8, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg9, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
		.to($pg10, $pgDuration, {opacity: 1, ease: $pgEase}, $pgDelay)
	
	
		var pixelGridScene = new ScrollMagic.Scene({
		    triggerElement: this,
		    triggerHook: "onCenter",
		    offset: "-200"
		    	}) 
			.setTween(pixelGridTL)
			.addTo (controller)
			
	});		
};


// Pixel Sets
var $pixelSet = $('.pixel-set')
if(($pixelSet).is(':visible')) {
	
	$($pixelSet).each(function() {
		
	var $pixelset1 = $(this).find('.pixel-set-1');
	var $pixelset2 = $(this).find('.pixel-set-2');
		
	  var tl = new TimelineMax();
	  
	  tl
	  .to($($pixelset1), 0.45, {opacity:1})
	  .to($($pixelset2), 0.45, {opacity:1}, 0.2)
	  .to($($pixelset1), 0.45, {y:-15, x:15}, 0.1)
	  .to($($pixelset2), 0.45, {y:15, x:-15}, 0.1)


	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-100px"
	  })
	  .setTween(tl)
	  .addTo(controller);		
		
		
	});
	
};


// Bounce Buttons
var $bounceButton = $('.bounce-button');
if(($bounceButton).is(':visible')) {
	
	$($bounceButton).each(function() {
		
		var tl = new TimelineMax();
				console.log(this);
		tl
		.to($bounceButton, 0.8, {scale: 1.05, ease: Elastic.easeOut.config(1, 0.5)})
		.to($bounceButton, 0.5, {scale: 1, ease: Power2.easeOut});

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onEnter",
			offset: '50px'
			})
			
			.setTween(tl)
			.addTo(controller);
	});
	
};


// staggerUp
var $staggerUp = $('.staggerUp');
if(($staggerUp).is(':visible')) {
	
	$($staggerUp).each(function() {
		
		$staggered = $(this).find('.staggered');
		
		var tween = TweenMax.staggerFromTo($staggered, 1, {y: 50}, {y: 0, ease: Power3.easeOut}, 0.25);
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onEnter",
			offset: "80",
			duration: 300
			})
			
			.setTween(tween)
			.addTo(controller);
	});
	
};


// fadeInUpClasses
var $fadeInUp = $('.fadeInUp');
if(($fadeInUp).is(':visible')) {
		
	$($fadeInUp).each(function() {
	  
	  var tween = TweenMax.fromTo($(this), 0.3, {autoAlpha:0, y: 50}, {autoAlpha:1, y: 0, ease: Power1.easeOut});
	
	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onEnter",
	    offset: "150px"
	  })
	  .setTween(tween)
	  .addTo(controller);
	  
	});	
	
};


// fadeInLeft Classes
var $fadeInLeft = $('.fadeInLeft');
if(($fadeInLeft).is(':visible')) {
		
	$($fadeInLeft).each(function() {
	  
	  var tween = TweenMax.fromTo($(this), 0.3, {autoAlpha:0, x: -50}, {autoAlpha:1, x: 0, ease: Power1.easeOut});
	
	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onEnter",
	    offset: "100px"
	  })
	  .setTween(tween)
	  .addTo(controller);
	  
	});	
	
};


// fadeInRight Classes
var $fadeInRight = $('.fadeInRight');
if(($fadeInRight).is(':visible')) {
		
	$($fadeInRight).each(function() {
	  
	  var tween = TweenMax.fromTo($(this), 0.3, {autoAlpha:0, x: 50}, {autoAlpha:1, x: 0, ease: Power1.easeOut});
	
	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onEnter",
	    offset: "100px"
	  })
	  .setTween(tween)
	  .addTo(controller);
	  
	});	
	
};


// Fancy Bullet Lists
var $fancyBullet = $('ul.fancy-bullets li');
if(($fancyBullet).is(':visible')) {	
	
	$($fancyBullet).each(function() {
		
		var $span = $(this).find('span');
		
		var tl = new TimelineMax();
	
		tl
		.fromTo(this, 0.25, {x:-12}, {x:0, ease: Power2.easeOut})
		.fromTo($span, 0.25, {x:12}, {x:0, ease: Power2.easeOut}, '-=0.25')
		
		
		var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: "onEnter",
		offset: "70px"
		})
		.setTween(tl)
		.addTo(controller);
	
	});	
	
};

// Multi-prupose img BGs

var $grayBGRow = $('.image-content-row.row-bg-gray.img-style-has-bg');
var $whiteBGRowImgLeft = $('.image-content-row.row-bg-white.img-style-has-bg.row-img-align-left');
var $whiteBGRowImgRight = $('.image-content-row.row-bg-white.img-style-has-bg.row-img-align-right');
var $imgOpacityTime = 0.35;
var $imgBlockTime = 0.45;
var $bgBlockDelay = 0.25;
var $imgEase = 'Power1.easeOut';
var blockEase = 'Expo.easeOut'

if(($grayBGRow).is(':visible')) {
	
	($grayBGRow).each(function() {

		var $imgWrap = $(this).find('.ic-row-img');		
		var $colorBlock = $(this).find('.color-bg-block');
		
		console.log($imgWrap);
	  
	  var tl = new TimelineMax();
	  
	  tl
	  .fromTo($imgWrap, $imgOpacityTime, {opacity:0}, {opacity:1, ease: $imgEase})
	  .fromTo($colorBlock, $imgBlockTime, {top:'0', bottom: '0'}, {top:'-33', bottom: '-37px', ease: blockEase}, $bgBlockDelay)

	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-50px"
	  })
	  .setTween(tl)
	  .addTo(controller);
	  
	});	
	
};


if(($whiteBGRowImgLeft).is(':visible')) {
	
	$('.image-content-row.row-bg-white.img-style-has-bg.row-img-align-left').each(function() {

		var $imgWrap = $(this).find('.ic-row-img');		
		var $colorBlock = $(this).find('.color-bg-block');
	  
	  var tl = new TimelineMax();
	  
	  tl
	  .fromTo($imgWrap, $imgOpacityTime, {opacity:0}, {opacity:1, ease: $imgEase})
	  .fromTo($colorBlock, $imgBlockTime, {left:'0', right: '0'}, {left:'27', right: '-27px', ease: blockEase}, $bgBlockDelay)

	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-50px"
	  })
	  .setTween(tl)
	  .addTo(controller);
	  
	});	
	
};


if(($whiteBGRowImgRight).is(':visible')) {
	
	$('.image-content-row.row-bg-white.img-style-has-bg.row-img-align-right').each(function() {

		var $imgWrap = $(this).find('.ic-row-img');		
		var $colorBlock = $(this).find('.color-bg-block');
	  
	  var tl = new TimelineMax();
	  
	  tl
	  .fromTo($imgWrap, $imgOpacityTime, {opacity:0}, {opacity:1, ease: $imgEase})
	  .fromTo($colorBlock, $imgBlockTime, {left:'0', right: '0'}, {left:'-46', right: '46px', ease: blockEase}, $bgBlockDelay)

	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-50px"
	  })
	  .setTween(tl)
	  .addTo(controller);
	  
	});	
	
};

// two-blue-corner imgs
var hasCornerBG = $('.has-corner-bg');
if((hasCornerBG ).is(':visible')) {
	
	$('.has-corner-bg').each(function() {
	  
	  var tl = new TimelineMax();
	  
	  tl
	  .to($(this), $imgOpacityTime, {opacity:1, ease: Power1.easeOut})
	  .to($('.sky-blue-corner-bg'), $imgBlockTime, {x:-21, y:-19, ease: blockEase}, 0.15)
	  .to($('.dark-blue-corner-bg'), $imgBlockTime, {x:21, y:19, ease: blockEase}, '-=0.4')

	  var scene = new ScrollMagic.Scene({
	    triggerElement: this,
	    triggerHook: "onCenter",
	    offset: "-50px"
	  })
	  .setTween(tl)
	  .addTo(controller);
	  
	});	
	
};


// Company Page
var aboutTitleBlueLine = $('#about-title-line-blue');
var aboutTitleGrayLine = $('#about-title-line-gray');

if((body).hasClass('page-template-company')) {

	var tl = new TimelineMax();
	
	tl
	.to(aboutTitleBlueLine, 0.3, {x: 30, ease: Power2.easeOut})
	.to(aboutTitleGrayLine, 0.3, {x: -30, ease: Power2.easeOut}, '-=0.3')
	
	.to(aboutTitleBlueLine, 0.2, {x: -30, ease: Power2.easeOut})
	.to(aboutTitleGrayLine, 0.2, {x: 30, ease: Power2.easeOut}, '-=0.2')	
	
	.to(aboutTitleBlueLine, 0.4, {x: -7, rotationY:180, ease: Power2.easeOut})
	.to(aboutTitleGrayLine, 0.4, {x: 7, rotationY:180, ease: Power2.easeOut}, '-=0.4');

	  var scene = new ScrollMagic.Scene({
	    triggerElement: '#about-our-mission',
	    triggerHook: "onEnter",
	    offset: "150px"
	  })
	  .setTween(tl)
	  .addTo(controller);

};


if($('.image-content-row.row-bg-gray.row-img-align-left').is(':visible')) {
	
	$('.single-leadership-card').each(function() {
		
	});	
	
};

// Why Us Img Zoom
if($('.wuc-img').is(':visible')) {
	
	$('.wuc-img').each(function() {
		
		var tween = TweenMax.fromTo(this, 1, {backgroundSize: '100% 100%'}, {backgroundSize: '130% 130%'});
		
		var scene = new ScrollMagic.Scene({
		        triggerElement: this,
		        triggerHook: "onCenter",
		        offset: -100,
		        duration: '300'
		})
		.setTween(tween)
		.addTo(controller);		
		
		
	});
	
};


// Leadership Cards
if((body).hasClass('page-template-leadership')) {
	
	$('.single-leadership-card').each(function() {
		
		var $img = $(this).find('img');
		var $cardBottom = $(this).find('.l-card-bottom');
		var $imgEase = 'Power2.easeOut';
		var $cbEase = 'Power2.easeOut';

		var tl = new TimelineMax();
		
		tl
		.fromTo($img, 1, 
		{filter: 'grayscale(100%)',
		webkitFilter: 'grayscale(100%)',
		scale: 1.2,
		x: -24,
		ease: $imgEase},
		
		{filter: 'grayscale(0)',
		webkitFilter: 'grayscale(0)',
		scale: 1,
		x: 0,
		ease: $imgEase} )
		
		.fromTo($cardBottom, 0.5, {y: 50, autoAlpha: 0, ease: $cbEase},
		{y: 0, autoAlpha: 1, ease: $cbEase}, '-=1');

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onCenter",
			offset: '-50px'
			
			})
			
			.setTween(tl)
			.addTo(controller);
	});
	
};


// Footer CTA Buttons
var $footerCTAHalf = $('.footer-cta-half');
if(($footerCTAHalf).is(':visible')) {
	
	$($footerCTAHalf).each(function() {
		
		var tl = new TimelineMax();
		
		var $button = $(this).find('a.button');		
		
		tl
		.to($button, 0.8, {scale: 1.05, ease: Elastic.easeOut.config(1, 0.5)})
		.to($button, 0.5, {scale: 1, ease: Power2.easeOut});

		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onEnter",
			offset: '0px'
			})
			
			.setTween(tl)
			.addTo(controller);
	});
	
};




}(document, window, jQuery));







