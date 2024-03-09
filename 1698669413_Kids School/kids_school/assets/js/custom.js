/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Kids School html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var KidsSchool = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- Kids School Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
			this.navbar();			
			this.sticky_header();			
			this.pp_testimonial_slider();			
			this.pp_partner_slider();			
			this.toggle_menu();			
			this.counter();
			this.filter_gallery();			
		},
		
		/*-------------- Kids School Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// Navbar
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
    // Navbar
	// sticky header
	sticky_header: function () {
		$(window).scroll(function () {
		  var wh = window.innerWidth;
		  {
			var h = window.innerHeight;
			var window_top = $(window).scrollTop() + 1;
			if (window_top > 100) {
			  $(".pp-header-wrapper").addClass("pp-header-fixed");
			} else {
			  $(".pp-header-wrapper").removeClass("pp-header-fixed");
			}
		  }
		});
	  },
	  // sticky header
		// testimonial slider			
		pp_testimonial_slider: function () {
			var swiper = new Swiper('.pp-client-wrapper .swiper-container', {
				slidesPerView: 2,
				spaceBetween: 30,
				loop: true,
				speed: 1000,				
				pagination: {
					el: '.pp-client-wrapper .swiper-pagination',
					clickable: true,
				},
			
				breakpoints: {
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
		// partner slider			
		pp_partner_slider: function () {
			var swiper = new Swiper('.pp-partner-wrapper .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: true,
				speed: 1000,								
				breakpoints: {
					1199: {
					  slidesPerView: 6,
					  spaceBetween: 30,
					},
					992: {
					  slidesPerView: 5,
					  spaceBetween: 30,
					},
					768: {
					  slidesPerView: 4,
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
				}
			});
		},
		// partner slider		
						
		// toggle menu
		toggle_menu: function(){
			$('.pp-toggle-btn').on('click',function(){
				$('body').toggleClass('menu-open');
			})
		},
		// toggle menu	
		// counter
		counter: function(){
			$('.counting').text('')
			$(".counting").each(function () {
				var $this = $(this),
					countTo = $this.attr("data-to");			
				$({ countNum: $this.text() }).animate(
					{countNum: countTo,},			
					{
						duration: 3000,
						easing: "linear",
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);						
						},
					}
				);
			});
		},
		// counter	
		// filter gallery
		filter_gallery: function(){
			$(document).ready( function() {   

				$('.grid').isotope({
				itemSelector: '.grid-item',
				});	
				$('.filter-button-group').on( 'click', 'li', function() {
				var filterValue = $(this).attr('data-filter');
				$('.grid').isotope({ filter: filterValue });
				$('.filter-button-group li').removeClass('active');
				$(this).addClass('active');
				});
			})
		},
		// filter gallery			
	};
	KidsSchool.init();	

}(jQuery));