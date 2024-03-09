/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: astrology html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var astrology = {
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
			/*-------------- astrology Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.toggle();
			this.counter();
			this.secret();
			this.ClientSlider();
			this.stickyheader();
			this.gzbottom_top();
			this.navbar();

		},

		/*-------------- astrology Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		navbar: function () {
			$('.as-CommonClass-navbar').on('click', function (e) {
				var th = $(this).attr('top-h');
				var target = this.hash,
					$target = $(target);

				$('html, body').stop().animate({
					'scrollTop': $target.offset().top - th
				}, 100, 'swing', function () {
					window.location.hash = target;
				});
			});
		},
		gzbottom_top: function () {
			if ($('#button').length > 0) {

				var btn = $('#button');

				$(window).scroll(function () {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});

				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({
						scrollTop: 0
					}, '300');
				});


			}
		},
		//sticky header
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
		// toggle
		toggle: function () {
			$(".as-toggle").on("click", function (e) {
				e.stopPropagation();
				$("body").toggleClass("menu-open")
			});

		},
		counter: function () {
			if ($('.eco_count_box').length > 0) {
				$('.eco_count_box').appear(function () {
					$('.count-no').countTo();
				});
			}
		},
		secret: function () {
			var swiper = new Swiper(".asSecretSlider", {
				spaceBetween: 30,
				slidesPerView: 4,
				speed: 2000,
				breakpoints: {
					1200: {
						slidesPerView: 4,
						spaceBetweenSlides: 30
					},

					991: {
						slidesPerView: 2,
						spaceBetweenSlides: 40
					},
					767: {
						slidesPerView: 2,
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
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
		},
		ClientSlider: function () {
			var swiper = new Swiper(".asClientSlider", {
				spaceBetween: 30,
				slidesPerView: 3,
				speed: 2000,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
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
						slidesPerView: 2,
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


	// bottom to top

	astrology.init();
}(jQuery));
