'use strict'; 

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
                $anchor.attr("href", "#charlie")
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
            $( ".navbar-fixed-top" ).addClass('nav-scroll');
            $( "#marciano").removeClass('hidden');  
            $( "#marciano-min").removeClass('hidden');

            
            
		}
		else {
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


//ANIMAR LAS CAJAS DE DESCRIPCION




var videogng=$("#gng2 iframe").attr("src") + "&autoplay=1";
var videocharlie=$("#charlie iframe").attr("src")+ "&autoplay=1";
var videopacman=$("#pacman iframe").attr("src")+ "&autoplay=1";
var videodonkey=$("#donkey iframe").attr("src")+ "&autoplay=1";







function cambiar(){

        switch ($(this).attr('id')) {
            case "btn_pacman":
                 if($(this).hasClass('btn-pacman-rojo')){
                      $(this).removeClass('btn-pacman-rojo'); 
                        $(this).addClass('btn-pacman-blanco');
                 }   
                 else{
                      $(this).removeClass('btn-pacman-blanco'); 
                        $(this).addClass('btn-pacman-rojo');
                 }    
                break;
            case "btn_charlie":
                 if($(this).hasClass('btn-charlie-rojo')){
                      $(this).removeClass('btn-charlie-rojo'); 
                        $(this).addClass('btn-charlie-blanco');
                 }   
                 else{
                      $(this).removeClass('btn-charlie-blanco'); 
                        $(this).addClass('btn-charlie-rojo');
                 }      
                break;
            case "btn_donkey":
                 if($(this).hasClass('btn-donkey-rojo')){
                      $(this).removeClass('btn-donkey-rojo'); 
                        $(this).addClass('btn-donkey-blanco');
                 }   
                 else{
                      $(this).removeClass('btn-donkey-blanco'); 
                        $(this).addClass('btn-donkey-rojo');
                 }    
                break;
            case "btn_gng":
                 if($(this).hasClass('btn-gng-rojo')){
                      $(this).removeClass('btn-gng-rojo'); 
                        $(this).addClass('btn-gng-blanco');
                 }   
                 else{
                      $(this).removeClass('btn-gng-blanco'); 
                        $(this).addClass('btn-gng-rojo');
                 }    
                break;                
        }     
    
    

    
    
    
   
    var descripcion1=$(this).prev().prev().attr('id');
    var descripcion2=$(this).prev().attr('id');
    

    if($(this).children().hasClass('glyphicon-film')){
    
                $(this).children().removeClass('glyphicon-film').addClass('glyphicon-exclamation-sign');
        
    
    }
    
    else{
    
                $(this).children().removeClass('glyphicon-exclamation-sign').addClass('glyphicon-film');
    
    }
    

    
    
         
//    $(this).closest("span").is(":hidden"){
//    
//    alert("hail");
//    }
    
    

    
var $youtube;
    
switch (descripcion1) {
    case "pacman1":
        $youtube=videopacman;
        break;
    case "charlie1":
        $youtube=videocharlie;
        break;
    case "donkey1":
        $youtube=videodonkey;
        break;
    case "gng1":
        $youtube=videogng;
        break;                
}     
    
    

    if ( $("#" + descripcion2).is(":hidden") ) {
    $( "#"+ descripcion1).slideUp( "slow" );
    $( "#" + descripcion2).slideDown( "slow" );
        $("#"+ descripcion2 +" iframe").attr("src",$youtube);   
        
//          lanzavideo();  

    } else {
    $("#" + descripcion2).slideUp( "slow" );
    $("#" + descripcion1).slideDown( "slow" );
        $("#"+ descripcion2 +" iframe").attr("src","");  
//        paravideo();
        
    }
    

}


$(document).ready(function() {
    
//Gracias a esta funcion hacemos que los efectos de animate se activen cuando haciendo scroll el objeto sea visible  en sus 3/4 de altura 
$(".wow").each(function() {
  var wowHeight = $(this).height()-$(this).height()/4;
  $(this).attr("data-wow-offset", wowHeight);
});    


    $("#btn_gng").click(cambiar);
    $("#btn_donkey").click(cambiar);
    $("#btn_pacman").click(cambiar);
    $("#btn_charlie").click(cambiar);  

//    $('#right').click(function(){
//        var ventana_ancho = $(window).width();			
//        $('.block').animate({left:ventana_ancho-$('.block').width()}, 1000);
//    });		

});


// CODIGO PARA MANEJAR LA API DE YOUTUBEI
// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function lanzavideo() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('videos', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
    player.playVideo();
    
    
}


function paravideo() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('videos', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady2
    }
  });
}

function onPlayerReady2(event) {
    player.pauseVideo();  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      




