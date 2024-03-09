/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Financial Advisor html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var FinancialAdvisor = {
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
			/*-------------- Financial Advisor Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.banner_slider();
			this.team_slider();
			this.service_slider();
			this.bottom_top();
			this.loader();	
			this.toggle_menu();
		},

		/*-------------- Financial Advisor Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Banner Slider
		banner_slider: function () {
			var swiper = new Swiper(".fin_banner_slider", {
      			loop: true,
				speed: 2000,
				navigation: {
			        nextEl: "#fin_bnr_next",
			        prevEl: "#fin_bnr_prev",
			    },
			    pagination: {
			        el: ".swiper-pagination",
			        clickable: true,
			        renderBullet: function (index, className) {
			          return '<span class="mt_bgtempconatainer ' + className + '">' + (index + 1) + "</span>";
			        },
			    },
    		});
		},

		// Team Slider			
		team_slider: function () {
			var swiper = new Swiper('.fin_team_slider', {
				slidesPerView: 3,
				spaceBetween: 30,
      			loop: true,
				speed: 2000,
				navigation: {
			        nextEl: "#fin_team_next",
			        prevEl: "#fin_team_prev",
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
			var swiper = new Swiper(".fin_service_slider", {
				slidesPerView: 3,
				spaceBetween: 30,
      			loop: true,
				speed: 2000,
				navigation: {
			        nextEl: "#fin_serv_next",
			        prevEl: "#fin_serv_prev",
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
				var fixed = $('.fin_nav_wrapper');
				$(window).scroll(function () {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
						fixed.addClass('fixed');
					} else {
						btn.removeClass('show');
						fixed.removeClass('fixed');
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
			$('.fin_toggle, .fin_body_overlay').on('click', function () {
				$('body').toggleClass('menu-open');
				$('.fin_nav_bar').toggleClass('mt_bgtempconatainer');
			})
		},

		
	};
	FinancialAdvisor.init();

}(jQuery));

