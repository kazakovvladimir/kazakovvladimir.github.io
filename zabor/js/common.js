$(function () {

	// WOW initialised
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();


	// Magnific Popup initialized
	function mfp_init(){

		/* Without Animation
		// Type Text
	    $('.popup-content').magnificPopup({
	        type: 'inline',
	    });

		// Type Image - картинка без анимации
		 $('.popup-image').magnificPopup({
		 type: 'image'
		 });

		// Type Image Zoom - картинка с анимацией
		 $('.popup-image-zoom').magnificPopup({
		 type: 'image',
		 zoom: {
		     enabled: true,
		     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		 }
		 });
		*/
	
		// With Animation
		// Inline popups
		$('.inline-popups').magnificPopup({
		  delegate: 'a',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

		// Image popups
		$('#image-popups').magnificPopup({
		  delegate: 'a',
		  type: 'image',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		      // just a hack that adds mfp-anim class to markup 
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  closeOnContentClick: true,
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

		// Hinge effect popup
		$('a.hinge').magnificPopup({
		  mainClass: 'mfp-with-fade',
		  removalDelay: 1000, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeClose: function() {
		        this.content.addClass('hinge');
		    }, 
		    close: function() {
		        this.content.removeClass('hinge'); 
		    }
		  },
		  midClick: true
		});
		// END 		 
	};
	mfp_init();



	$(window).ready(function(){


	});

});