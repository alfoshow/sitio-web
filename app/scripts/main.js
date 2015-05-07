use strict;


/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

//Modifico esta funcion para que cada vez que pulse al icono spaceinvaders me vaya a un juego distinto
$(function() {
    $('body').on('click', '.page-scroll', function(event) {
 
      var $anchor = $(this); 
        
        if ($anchor.attr('href')==undefined){
        
            $anchor.attr("href", "#pacman")
        }
        else{
        
        
        switch ($anchor.attr('href')) {
            case "#invader":
                $anchor.attr("href", "#pacman")
                break;
            case "#pacman":
                $anchor.attr("href", "#charlie")
                break;
            case "#charlie":
                $anchor.attr("href", "#donkey")
                break;
            case "#donkey":
                $anchor.attr("href", "#gng")
                break;
            case "#gng":
                $anchor.attr("href", "#pacman")
                break;                
        } 
        }
        

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-69
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



//FUNCIONES PARA NAV-BAR

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 60;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
        
        
        
		if ( sy >= changeHeaderOn ) {
//			classie.add( header, 'navbar' );
            $( ".navbar-fixed-top" ).addClass('nav-scroll');
            $( "#marciano").removeClass('hidden');  
            $( "#marciano-min").removeClass('hidden');             
            
		}
		else {
//			classie.remove( header, 'navbar-shrink' );
            $( ".navbar-fixed-top" ).removeClass('nav-scroll');
            $( "#marciano").addClass('hidden'); 
            $( "#marciano-min").addClass('hidden'); 
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();