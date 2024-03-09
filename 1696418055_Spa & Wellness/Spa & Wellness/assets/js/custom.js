/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: SPA AUTUMAN html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Spaautuman = {
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
			/*-------------- SPAAUTUMAN Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.service_tab();
			this.product_slider();
			this.testimonial_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
			this.navbar();
		},

		/*-------------- SPAAUTUMAN Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".spa_banner_slider", {
      			navigation: {
        			nextEl: "#spa_bnr_next",
        			prevEl: "#spa_bnr_prev",
      			},
      			effect: "fade",
      			loop: true,
				speed: 2000,
				
    		});
		},

		// Service Tabs
		service_tab: function () {
			$('.spa_tabs li').on('click', function(){
        		var target = $(this).attr('data-rel');
      			$('.spa_tabs li').removeClass('active');
        		$(this).addClass('active');
        		$("#"+target).fadeIn('slow').siblings(".spa_tab_content").hide();
        		return false;
  			});
		},

		// Product Slider			
		product_slider: function () {
			var swiper = new Swiper('.spa_product_slider', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
				navigation: {
        			nextEl: "#spa_prod_next",
        			prevEl: "#spa_prod_prev",
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

		// Testimonial Slider
		testimonial_slider: function () {
			var swiper = new Swiper(".spa_testi_slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				speed: 2000,
      			pagination: {
	        		el: ".swiper-pagination",
	        		dynamicBullets: true,
	        		clickable: true,
      			},
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
					if ($(window).scrollTop() > 50) {
						btn.addClass('show');
						fixed.addClass('pp-header-fixed');
					} else {
						btn.removeClass('show');
						fixed.removeClass('pp-header-fixed');
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
			$('.spa_toggle_menu, .spa_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.spa_menu').toggleClass('mt_bgtempconatainer');
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

		// gallery grid
		gallery_grid:function(){
			$('.grid').isotope({
				itemSelector: '.grid-item',
			  });
		}

	};
	Spaautuman.init();

}(jQuery));

