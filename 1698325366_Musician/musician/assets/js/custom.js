/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Musician html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Musician = {
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
			/*-------------- Musician Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.testimonial_slider();			
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.gallery_grid();
		},

		/*-------------- Musician Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// testimonial slider			
		testimonial_slider: function () {
			var swiper = new Swiper('.mu-testimonial-wrapper .swiper', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				pagination: {
					el: '.mu-testimonial-wrapper .swiper-pagination',
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
						fixed.addClass('pp-header-fixed')
					} else {
						btn.removeClass('show');
						fixed.removeClass('pp-header-fixed')
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
			$('.mu-toggle-btn, .mu-toggleclose, .mu-menu-overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.mu-header-menu').toggleClass('mt_bgtempconatainer');
			})
		},
		// toggle menu
		// gallery grid
		gallery_grid:function(){
			$('.grid').isotope({
				itemSelector: '.grid-item',
			  });
		}
		// gallery grid
	};
	Musician.init();

}(jQuery));