/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Guruyoga html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Guruyoga = {
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
			/*-------------- Guruyoga Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.testimonial_slider();			
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- Guruyoga Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// testimonial slider			
		testimonial_slider: function () {
			var swiper = new Swiper('.gy_testi_slider', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				pagination: {
					el: '.gy_testi_slider .swiper-pagination',
					clickable: true,
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
		// testimonial slider
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
		// Bottom To Top
		// loader			
		loader: function () {
			jQuery(window).on('load', function () {
				$(".loader").fadeOut();
				$(".spinner").delay(500).fadeOut("slow");
			});
		},
		// loader
		// toggle menu
		toggle_menu: function(){
			$('.gy_logo span, .gy_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.gy_menu').toggleClass('mt_bgtempconatainer');
			})
		},
		// toggle menu
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
	Guruyoga.init();

}(jQuery));