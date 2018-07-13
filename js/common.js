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


	// MENU close after click link
	$('.menu_left a').click(function() {
		$('.menuToggle').toggleClass('menuToggle_active');
		$('.menu_left').toggleClass('menu_left_active');

	});

	// MENU open/close from menu-Toggle button
	$('.menuToggle').click(function() {
		$(this).toggleClass('menuToggle_active');
		$('.menu_left').toggleClass('menu_left_active');
		/*$(".menu_left").toggle(function(){
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			} else {
			}
		});	*/
	});
	// MENU close from any click to body
	$('.content').click(function(e){
		var menu = $('.menu_left');
		if( e.target != menu[0] && e.target != $('.menu_left a') && menu.css('left')==='0px' ) {
			$('.menuToggle').toggleClass('menuToggle_active');
			$('.menu_left').toggleClass('menu_left_active');
		}
	});


	//Show SKILLS comments
	var desc = {
		"HTML" : "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
		"CSS": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
		"JavaScript" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatem incidunt libero non voluptas maiores repellendus, placeat ut ratione! Provident?",
		"PHP" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vero nobis magnam, iusto, ex inventore, esse, optio quibusdam eum explicabo harum rem! Omnis fugit voluptatem eveniet illum cupiditate repellat praesentium eum quae, perspiciatis unde corrupti explicabo minima!",
		"MySQL" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, consectetur ab veritatis numquam voluptates enim perferendis sit. Doloribus odit tempore sit, placeat adipisci quia, obcaecati perferendis earum dicta error ullam fugit magni laboriosam. Impedit aliquam perspiciatis ducimus expedita unde. Suscipit rem incidunt voluptatem, dignissimos facere autem tenetur asperiores molestias illo vitae temporibus quidem, magni debitis. Doloremque tempore nihil sed id veritatis, aliquid esse consequuntur eius, soluta incidunt.",
		"Axure RP" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores adipisci reprehenderit, deleniti quos voluptatibus sapiente vitae dignissimos modi aut impedit culpa incidunt nulla.",
		"Photoshop" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, porro doloremque, molestias quo, dicta cumque dolor asperiores illum atque vel commodi voluptatem harum deserunt quam perspiciatis soluta tenetur nulla enim, in et voluptatibus! Aut magni beatae, recusandae ut commodi, animi, minus expedita blanditiis vel quibusdam maxime inventore odio fugiat, natus?",
		"Illustrator" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		"InDesign" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis rem inventore, quasi, odio consequuntur deleniti fugiat iste natus et modi, molestiae perspiciatis dicta adipisci distinctio suscipit? Dolor incidunt reiciendis maiores veritatis doloribus quos eaque unde!",
		"PTGui" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eaque! At quidem ut ab inventore, reprehenderit sequi sit! Accusantium minima quod dicta aliquam doloribus autem voluptatem recusandae molestias eaque neque animi, nobis sint quisquam in nulla. Omnis dicta officia animi aspernatur consequuntur adipisci, quod eaque, iste veniam odio optio dolorem."
		};

		
	var prev_line = 'HTML';
	$('.skill_box').hover(function(){
		sub =  $(this).find('span.subtitle2').text();
		if( sub != prev_line) {
			$('div.skill_box').find('div.progress_bar_line_active').removeClass('progress_bar_line_active');
			prev_line = sub;
		//console.log( sub + '-' + prev_line );
		};
		$(this).find('div.progress_bar_line').addClass('progress_bar_line_active');
		$('div.skill_description_box div.subtitle3').text( sub );
		$('div.skill_description_box div#skill_description_box_desc').text( desc[sub] );
	});
	

	$(window).ready(function(){


	});

});