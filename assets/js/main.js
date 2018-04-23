(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".listing-carousel").owlCarousel({
            items:3,
            loop:true,
            dots:true,
            dotsData:false,
            autoplay:false,
            margin:40,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	