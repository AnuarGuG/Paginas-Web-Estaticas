/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: Consulting html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Consulting = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if (!this.initialised) {
				this.initialised = true;
			}
			else {
				return;
			}
			/*-------------- Consulting Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/

			
			
			this.toggle_btn();
			this.testimonial_slider();
			this.team_slider();	
			this.sticky_header();
			this.navbar();		
		},

		/*-------------- Consulting Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/


		// toggle start
		toggle_btn: function () {
			$(document).on("click", function (event) {
				var $trigger = $(".wh-toggle");
				if ($trigger !== event.target && !$trigger.has(event.target).length) {
					$("body").removeClass("toggle");
				}
			});
			$(" .wh-toggle").click(function () {
				$("body").toggleClass("toggle");
			});
		},
		// toggle end
		// testimonial-slider-start
		testimonial_slider: function () {
			var swiper = new Swiper(".wr-mySwiper", {
				cssMode: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				mousewheel: true,
				keyboard: true,
			});
		},
		// testimonial-slider-end
		// team slider start
		team_slider: function () {

			var swiper = new Swiper('.Wr-expertise-section .Wr-expertise-swiper-container', {
				slidesPerView: 3,
				spaceBetween: 20,
				loop: true,
				speed: 1000,
				// autoplay: {
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// },
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					425: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				},
				// team slider end				
			});
		},
		  
	  // sticky header
	  sticky_header: function () {
		$(window).scroll(function () {
		  var wh = window.innerWidth;
		  {
			var h = window.innerHeight;
			var window_top = $(window).scrollTop() + 1;
			if (window_top > 100) {
			  $(".pp-header-wrapper").addClass("pp-header-fixed animated fadeInDown");
			} else {
			  $(".pp-header-wrapper").removeClass("pp-header-fixed animated fadeInDown");
			}
		  }
		});
	  },
		  // sticky header
		  navbar: function() {
				  $('.as-CommonClass-navbar').on('click',function (e) {
					  var th = $(this).attr('top-h');
					  var target = this.hash,
						  $target = $(target)
	  ;
		  
					  $('html, body').stop().animate({
						  'scrollTop': $target.offset().top-th
					  }, 100, 'swing', function () {
						  window.location.hash = target;
					  });
				  });
			  },

	};
	Consulting.init();
}(jQuery));


