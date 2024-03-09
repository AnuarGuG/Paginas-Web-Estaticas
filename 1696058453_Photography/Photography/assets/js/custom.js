/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Pixel Join html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var pixeljoin = {
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
			/*-------------- Pixel Join Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.team_slider();
			this.service_slider();
			this.portfolio_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
		},

		/*-------------- Pixel Join Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".pxj_banner_slider", {
      			effect: "fade",
      			loop: true,
				speed: 2000,
				navigation: {
			        nextEl: "#pxj_bnr_next",
			        prevEl: "#pxj_bnr_prev",
		      	},
    		});
		},

		// Team Slider			
		team_slider: function () {
			var swiper = new Swiper('.pxj_team_slider', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
				navigation: {
        			nextEl: "#pxj_team_next",
        			prevEl: "#pxj_team_prev",
      			},
				breakpoints: {
					1199: {
						slidesPerView: 4,
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
			var swiper = new Swiper('.pxj_service_slider', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
				navigation: {
        			nextEl: "#pxj_service_next",
        			prevEl: "#pxj_service_prev",
      			},
				breakpoints: {
					1199: {
						slidesPerView: 4,
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

		// Portfolio Slider
		portfolio_slider: function () {
			var galleryTop = new Swiper('.gallery-top', {
				effect: "fade",
	 			loop: true,
	 			speed: 2000,
				loopedSlides: 4
    		});
    		var galleryThumbs = new Swiper('.gallery-thumbs', {
				spaceBetween: 5,
		      	centeredSlides: true,
		      	speed: 2000,
		      	slidesPerView: 2,
		      	touchRatio: 0.2,
		      	slideToClickedSlide: true,
				loop: true,
				loopedSlides: 4,
				breakpoints: {
					1199: {
						slidesPerView: 5,
					},
					992: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 4,
					},
					575: {
						slidesPerView: 3,
					},
					320: {
						slidesPerView: 2,
					}
				}
    		});
    		galleryTop.controller.control = galleryThumbs;
    		galleryThumbs.controller.control = galleryTop;
		},
		
		// Bottom To Top
		bottom_top: function () {
			if ($('#button').length > 0) {
				var btn = $('#button');
				$(window).scroll(function () {
					if ($(window).scrollTop() > 50) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});
				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, '50');
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
			$('.pxj_toggle span, .pxj_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.pxj_menu').toggleClass('mt_bgtempconatainer');
			})
		},

	};
	pixeljoin.init();

}(jQuery));

