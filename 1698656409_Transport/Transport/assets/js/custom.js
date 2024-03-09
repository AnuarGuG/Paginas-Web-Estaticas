/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Transport
-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Transport = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- Transport Design Functions Calling-------------------*/
    
      this.navbar();
      this.sticky_header();
			this.tp_counter();
      this.tp_testimonial_slide();
      this.tp_toggle_animate();
			
		},
		
		/*-------------- Transport Design Functions Calling ------------------------*/
		
     /*--- Testimonial Slider----*/
			tp_testimonial_slide: function(){
        var swiper = new Swiper(".tp-testimonial-slider", {
          slidesPerView: 2,
          spaceBetween: 60,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            992: {
						  slidesPerView: 2,
						  spaceBetween: 60,
						},
						0: {
						  slidesPerView: 1,
						  spaceBetween: 30,
						},
					}
      });
			},
    /*--- Testimonial Slider----*/
    navbar: function () {
      $('.as-CommonClass-navbar').on('click', function (e) {
        var th = $(this).attr('top-h');                                                                                                                               
        var target = this.hash,
          $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - th
        }, 100, 'swing', function () {
          window.location.hash = target;
        });
      });
    },
    // fix menu scroll
    sticky_header: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        {
          var h = window.innerHeight;
          var window_top = $(window).scrollTop() + 1;
          if (window_top > 100) {
            $(".pp-header-wrapper").addClass("pp-header-fixed");
          } else {
            $(".pp-header-wrapper").removeClass("pp-header-fixed");
          }
        }
      });
    },
		/*--- Counter numbers----*/
			tp_counter: function(){
        $.fn.jQuerySimpleCounter = function (options) {
          var settings = $.extend(
            {
              start: 0,
              end: 100,
              easing: "swing",
              duration: 400,
              complete: "",
            },
            options
          );
      
          var thisElement = $(this);
      
          $({
            count: settings.start,
          }).animate(
            {
              count: settings.end,
            },
            {
              duration: settings.duration,
              easing: settings.easing,
              step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount + "+");
              },
              complete: settings.complete,
            }
          );
        };
      
        $("#number1").jQuerySimpleCounter({
          end: $("#number1").data('to'),
          duration: 3000,
        });
        $("#number2").jQuerySimpleCounter({
          end: $("#number2").data('to'),
          duration: 3000,
        });
        $("#number3").jQuerySimpleCounter({
          end: $("#number3").data('to'),
          duration: 3000,
        });
        $("#number4").jQuerySimpleCounter({
          end: $("#number4").data('to'),
          duration: 3000,
        });
			},
		/*--- Counter numbers----*/

   
    
    /*--- Toggle Animation----*/
			tp_toggle_animate: function(){
        $(document).ready(function(){
          $(document).on("click", function(event){
            var $trigger = $(".tp-toggle");
              if($trigger !== event.target && !$trigger.has(event.target).length){
                  $("body").removeClass("open-toggle");
              }            
          });
          $(".tp-toggle").click(function(){
            $("body").toggleClass("open-toggle");
          });
        });
			},
    /*--- Toggle Animation----*/
 
			
			
	};
Transport.init();
}(jQuery));	

















