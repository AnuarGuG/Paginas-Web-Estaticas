/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Travel Agency html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var TravelAgency = {
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
			/*-------------- Travel Agency Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.package_slider();
			this.service_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- Travel Agency Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".tra_banner_slider", {
				effect: "fade",
      			loop: true,
				speed: 2000,
				grabCursor: true,
				navigation: {
			        nextEl: "#tra_bnr_next",
			        prevEl: "#tra_bnr_prev",
			    },
    		});
		},

		// Package Slider			
		package_slider: function () {
			var swiper = new Swiper('.tra_pack_slider', {
				loop: true,
				speed: 2000,
				slidesPerView: 4,
		      	spaceBetween: 30,
		      	centeredSlides: true,
		      	pagination: {
		      	  el: ".swiper-pagination",
		      	  clickable: true,
		      	},
				breakpoints: {
					1500: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					650: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
					,
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
		},

		// Service Slider
		service_slider: function () {
			var swiper = new Swiper(".tra_service_slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
				navigation: {
        			nextEl: "#tra_service_next",
        			prevEl: "#tra_service_prev",
      			},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
					,
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
    		});
		},
		
		// Bottom To Top
		bottom_top: function () {
			if ($('#button').length > 0) {
				var btn = $('#button');
				var fixed = $('.pp-header-wrapper');
				$(window).scroll(function () {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
						fixed.addClass('pp-header-fixed');
					} else {
						btn.removeClass('show');
						fixed.removeClass('pp-header-fixed');
					}
				});
				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, '300');
				});
			}
		},
		
		// loader			
		loader: function () {
			jQuery(window).on('load', function () {
				$(".loader").fadeOut();
				$(".spinner").delay(500).fadeOut("slow");
			});
		},
		
		// toggle menu
		toggle_menu: function(){
			$('.tra_toggle_menu, .tra_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.tra_menu').toggleClass('mt_bgtempconatainer');
			})
		},

		navbar: function() {
			$('.as-CommonClass-navbar').on('click',function (e) {
				var th = $(this).attr('top-h');
				var target = this.hash,
					$target = $(target);
	
				$('html, body').stop().animate({
					'scrollTop': $target.offset().top-th
				}, 100, 'swing', function () {
					window.location.hash = target;
				});
			});
		},
		
	};
	TravelAgency.init();

}(jQuery));

