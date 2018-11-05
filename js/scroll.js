(function () {
    "use strict";

     //Get elements from DOM 
    function el(element) {
	    if (element.charAt(0) === "#") { 
	        return document.querySelector(element); 
	    } else { 
	        return document.querySelectorAll(element); 
	    }     
    }

    //Variables
    let lastScrollPosition = 0;
    let newScrollPosition = 0;
    let isScrollingDown = false;
    let topNav = el('#global-nav');
    let mainNav = el('#main-nav');
    let mainNavPos = mainNav.offsetTop;
    let menu = el("#icon-menu");
    let menuContent = el("#drop-menu");


    /********** Functions *********************/
    function scrollHandler() {

    	newScrollPosition = window.pageYOffset;

    	if (newScrollPosition > lastScrollPosition) {
    		isScrollingDown = true;

    		topNav.style.top = "-50px";

    	} else if (newScrollPosition <  lastScrollPosition) {
    		isScrollingDown = false;
    		topNav.style.top = "0";
    	}

    	if (newScrollPosition >= mainNavPos) {
    		 
    		mainNav.classList.add("sticky");
    		mainNav.classList.add("main-nav-sticky");

    	} else {

    		mainNav.classList.remove("sticky");
    		mainNav.classList.remove("main-nav-sticky");
    	}

    	lastScrollPosition = newScrollPosition;
    }

    function clickMenuHandler() {
    	menuContent.classList.toggle("show");
    }

    function hideMenu(e) {
    	if(!e.target.matches("#icon-menu")) {
    		if (menuContent.classList.contains("show")) {
    			menuContent.classList.remove("show");
    		}
    	}

    }

    /********** Add event listeners ***********/
    window.addEventListener("scroll", scrollHandler);
    menu.addEventListener("click", clickMenuHandler);
    window.addEventListener("click", hideMenu);

}());