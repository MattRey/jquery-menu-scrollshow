var prevScrollpos = window.pageYOffset;
	 $(window).scroll(function(e) {
		 	var currentScrollPos = window.pageYOffset;
	    // add/remove class to navbar when scrolling to hide/show
	    var scroll = $(window).scrollTop();
	    if ((prevScrollpos < currentScrollPos) & (scroll >= 150)) {
	        $('#wrapper-navbar').css("top", "-100px");
	    } else {
	        $('#wrapper-navbar').css("top", "0");
	    }
			prevScrollpos = currentScrollPos;
	});
