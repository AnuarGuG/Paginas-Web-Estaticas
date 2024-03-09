/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: email marketing html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var EmailMarketing = {
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
			/*-------------- email marketing Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.navbar();
			this.stickyheader();
			this.bottom_top();
			this.toggle();
			this.counter();
			this.testimonial();
			this.magnificpopup();
		},

		/*-------------- email marketing Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
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
		stickyheader: function () {
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
		bottom_top: function() {
			if ($('#button').length > 0) {
	
				var btn = $('#button');
	
				$(window).scroll(function() {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});
	
				btn.on('click', function(e) {
					e.preventDefault();
					$('html, body').animate({
						scrollTop: 0
					}, '300');
				});
	
	
			}
		},
		toggle:function(){
			$(".ir-res-toggle").on("click", function(e){
				e.stopPropagation();
				$("body").toggleClass("menu-open")
			});
			
		},
		magnificpopup:function(){
			$('.popup-youtube').magnificPopup({
				type: 'iframe'
				});
		},
		counter: function() {
			if ($('.eco_count_box').length > 0) {
				$('.eco_count_box').appear(function(){
					$('.count-no').countTo();
				});
			}
		},
		
		testimonial:function(){
			var swiper = new Swiper(".psTestimonial", {
				spaceBetween: 30,
				slidesPerView:3,
				speed:2000,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				  },
				breakpoints: {
					1200: {
						slidesPerView: 3,
						spaceBetweenSlides: 30
					},
					
					991: {
						slidesPerView: 2,
						spaceBetweenSlides: 40
					},
					767: {
						slidesPerView: 1,
						spaceBetweenSlides: 40
					},
					580: {
						slidesPerView: 1,
						spaceBetweenSlides: 40
					},
					480: {
						slidesPerView: 1,
						spaceBetweenSlides: 40
					},
					380: {
						slidesPerView: 1,
						spaceBetweenSlides: 40
					},
					320: {
						slidesPerView: 1,
						spaceBetweenSlides: 40
					},
				}
		    });
		},
	};
	EmailMarketing.init();
}(jQuery));
