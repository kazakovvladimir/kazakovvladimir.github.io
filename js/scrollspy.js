// Var 0 - Only smoth scroll to link //
/*	    $('a[href^="#"]').click(function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').stop().animate({scrollTop: top}, 2000, "easeOutExpo");
		});
    */
// Var 0 //


// Var 1 //
function scrollspy1(){
  // Cache selectors
  var lastId,
  topMenu = $(".menu_left"),
  topMenuHeight = topMenu.outerHeight(),
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    },  2000, "easeOutExpo");
    window.location.hash = href;
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight+200;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
       lastId = id;
         // Set/remove active class
         menuItems
         .removeClass("active")
         .filter("[href='#"+id+"']").addClass("active");
       }                   
     });
}
// END Var 1 //

// Var 2 //
function scrollspy2(){
  var menu_selector = ".menu_left"; 

  function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top-100 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  $(document).ready(function () {

    $(document).on("scroll", onScroll);

    $(menu_selector + " a[href^='#']").click(function(e){
      e.preventDefault();

      $(document).off("scroll");
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").stop().animate({
        scrollTop: target.offset().top
      }, 1500, "easeOutExpo", function(){
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });

    });

  });
}
// END Var 2 //

// Var 2_1 //
function scrollspy2_1(){
  var menu_selector = ".menu_left"; 

  function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
      var hash = $(this).attr("href");
      var n=hash.substring(1, hash.length);
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
        $(menu_selector + " div." + n).removeClass("active");
        $(this).addClass("active");
        $(menu_selector + " div." + n).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  $(document).ready(function () {

    $(document).on("scroll", onScroll);

    $(menu_selector + " a[href^='#']").click(function(e){
      n=$(this).attr("href").substring(1, $(this).attr("href").length);
      e.preventDefault();

      $(document).off("scroll");
      $(menu_selector + " div." + n).addClass("active");
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").stop().animate({
        scrollTop: target.offset().top
      }, 1500, "easeOutExpo", function(){
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });

    });

  });
}
// END Var 2_1 //


// Var 3 //
function scrollspy3(){

  var menu_selector = ".menu_left"; 
    $(function(){
      $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
      return false; 
      }); 

    });



}
// END Var 3 //


$(document).ready(function(){

  scrollspy2();

});
