/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: fitness gym html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var FitnessGYM = {
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
			/*-------------- fitness gym Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.navbar();
			this.stickyheader();
			this.bottom_top();
			this.toggle();
			this.Magnific_popup();
			this.pgIsotop_gallery();
			this.testimonialSlider();
		},

		/*-------------- fitness gym Functions Calling ---------------------------------------------------
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
			$(".fg-toggle").on("click", function(e){
				e.stopPropagation();
				$("body").toggleClass("menu-open")
			});
			
		},
		testimonialSlider:function(){
			var swiper = new Swiper(".mySwiper", {
				slidesPerView: 3,
				spaceBetween: 30,
				speed:1500,
				breakpoints:{
					1200: {
						slidesPerView: 3,
						spaceBetweenSlides: 30
					},
					992: {
						slidesPerView: 3,
						spaceBetweenSlides: 30
					},
					767: {
						slidesPerView: 2,
						spaceBetweenSlides: 30
					},
					580: {
						slidesPerView:1,
						spaceBetweenSlides: 30
					},
					480: {
						slidesPerView:1,
						spaceBetweenSlides: 30
					},
					380: {
						slidesPerView:1,
						spaceBetweenSlides: 30
					},
					320: {
						slidesPerView: 1,
						spaceBetweenSlides: 30
					},
				},
				navigation: {
				  nextEl: ".swiper-button-next",
				  prevEl: ".swiper-button-prev",
				},
			  });
		},
		pgIsotop_gallery: function() {
			$(window).on('load', function(){
			  
			  $('.fg-gallery-grid').isotope({
				  itemSelector: '.fg-grid-item',
				  filter: '*'
			  }); 
			});
			
			
			$('#loadMore').on('click', function(){
			  $('.pg_view_gallery').addClass('pg_view_gallery_view');
			  $('.fg-gallery-grid').isotope({
				itemSelector: '.fg-grid-item',
				filter: '*'
			  }); 
			  
			});
		  },
		Magnific_popup: function() {
			if($('.view').length > 0){
			$('.view').magnificPopup({
			  type: 'image',
			  
			  gallery: {
			  enabled: true
			  }
			});
		  }
		},
	};
	FitnessGYM.init();
}(jQuery));
