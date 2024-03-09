/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Handmade Crafts html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var HandmadeCraft = {
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
			/*-------------- Handmade Crafts Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.collection_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- Handmade Crafts Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".hmc_banner_slider", {
      			loop: true,
				speed: 2000,
				navigation: {
        			nextEl: "#hmc_bnr_next",
        			prevEl: "#hmc_bnr_prev",
      			},
    		});
		},

		// collection Slider			
		collection_slider: function () {
			var swiper = new Swiper('.hmc_collection_slider', {
				loop: true,
				speed: 2000,
				slidesPerView: 3,
		      	spaceBetween: 30,
		      	navigation: {
        			nextEl: "#hmc_coll_next",
        			prevEl: "#hmc_coll_prev",
      			},		      	
				breakpoints: {
					1400: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1199: {
						slidesPerView: 2,
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
			$('.hmc_toggle_menu, .hmc_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.hmc_menu').toggleClass('mt_bgtempconatainer');
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
	HandmadeCraft.init();

}(jQuery));

