/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: News & Media html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var NewsMedia = {
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
			/*-------------- News & Media Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.category_slider();
			this.team_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- News & Media Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var galleryTop = new Swiper('.nm_news_full', {
				effect: "fade",
	 			loop: true,
	 			speed: 2000,
				loopedSlides: 3
    		});
    		var galleryThumbs = new Swiper('.nm_news_short', {
				spaceBetween: 15,
		      	centeredSlides: true,
		      	speed: 2000,
		      	slidesPerView: 2,
		      	touchRatio: 0.2,
		      	slideToClickedSlide: true,
				loop: true,
				loopedSlides: 4,
				breakpoints: {
					1199: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					}
				}
    		});
    		galleryTop.controller.control = galleryThumbs;
    		galleryThumbs.controller.control = galleryTop;
		},

		// Category Slider			
		category_slider: function () {
			var swiper = new Swiper('.nm_cate_slider', {
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
					375: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					0:{
						slidesPerView: 1,
					}
				}
			});
		},


		// Team Slider
		team_slider: function () {
			var swiper = new Swiper(".nm_team_slider", {
				slidesPerView: 3,
				spaceBetween: 30,
      			loop: true,
				speed: 2000,
				pagination: {
        			el: ".swiper-pagination",
        			dynamicBullets: true,
        			clickable: true,
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
			$('.nm_toggle, .nm_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.fin_nav_bar').toggleClass('mt_bgtempconatainer');
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
	NewsMedia.init();

}(jQuery));

