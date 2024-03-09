/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Black Friday html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var BlackFriday = {
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
			/*-------------- Black Friday Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.category_slider();
			this.deals_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- Black Friday Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".fri_banner_slider", {
      			loop: true,
				speed: 2000,
				grabCursor: true,
    		});
		},

		// Product Slider			
		category_slider: function () {
			var swiper = new Swiper('.fri_cate_slider', {
				slidesPerView: 2,
				spaceBetween: 20,
				loop: true,
				speed: 2000,
				grabCursor: true,
				breakpoints: {
					1199: {
						slidesPerView: 8,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 6,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 6,
						spaceBetween: 20,
					},
					575: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 3,
						spaceBetween: 15,
					}
					,
					0: {
						slidesPerView: 2,
						spaceBetween: 15,
					}
				}
			});
		},

		// Deals Slider
		deals_slider: function () {
			var swiper = new Swiper(".fri_deal_slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
				grabCursor: true,
      			loop: true,
				speed: 2000,
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
					if ($(window).scrollTop() > 60) {
						btn.addClass('show');
						fixed.addClass('pp-header-fixed');
					} else {
						btn.removeClass('show');
						fixed.removeClass('pp-header-fixed');
					}
				});
				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, '60');
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
			$('.fri_toggle_menu, .fri_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
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
	BlackFriday.init();

}(jQuery));

