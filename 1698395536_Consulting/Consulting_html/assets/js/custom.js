/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Consulting html
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Consulting = {
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
		/*-------------- Consulting Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
			this.cn_partner_slider();		
			this.cn_service_slider();
			this.cn_testimonial_slider();
			this.world_map();
			this.navbar();
			this.sticky_header();
			this.bottom_top();
			this.loader();
			this.toggle_menu();
			this.counter();
		},
		
		/*-------------- Consulting Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		// partner slider			
		cn_partner_slider: function () {
			var swiper = new Swiper('.cn-partner-wrapper .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				autoplay: false,	
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
		// service slider			
		cn_service_slider: function () {
				var swiper = new Swiper('.cn-service-wrapper .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 1000,
					autoplay: false,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
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
						320: {
						  slidesPerView: 1,
						  spaceBetween: 15,
						}
					}
				});
			},
		// service slider
		// testimonial slider			
		cn_testimonial_slider: function () {
			var swiper = new Swiper('.cn-testimonial-wrapper .swiper-container', {
				slidesPerView: 2,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				autoplay: false,
				pagination: {
					el: '.cn-testimonial-wrapper .swiper-pagination',
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
	// map start
	world_map: function() {
		if($('#world-map').length > 0){
			$(function(){
				$('#world-map').vectorMap({
				map: 'world_mill',
				scaleColors: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.9,
				hoverColor: false,
				zoomOnScrollSpeed:1, //default value is 3
				 zoomStep:1.1, //default value is 1.6
					markerStyle: {
									initial:{
												fill: '#ff794d',
												stroke: '#ff794d'
											},
									hover: {
												stroke: '#ff794d',
												fill:'#ff794d',
												"stroke-width": 2,
												cursor: 'pointer'
											},
									selected:{
												fill: 'blue'
											},
									selectedHover: {
													}
								},
					regionStyle:{
									initial: {
												fill: '#27324f',
												"fill-opacity": 1,
												stroke: 'none',
												"stroke-width": 0,
												"stroke-opacity": 1
											},
									hover: {
												"fill-opacity": 0.8,
												cursor: 'pointer'
											},
									selected:{
												fill: 'yellow'
											},
									selectedHover: {
													}
								},
					backgroundColor: 'transparent',
					markers: [
						{
							latLng: [31.230391, 121.473701],
							name: 'Shanghai',
						},
						{
							latLng: [39.904202, 116.407394],
							name: 'Beijing',
						},
						{
							latLng: [28.70406, 77.102493],
							name: 'Delhi',
						},
						{
							latLng: [6.524379, 3.379206],
							name: 'Lagos',
						},
						{
							latLng: [39.343357, 117.361649],
							name: 'Tianjin',
						},
						{
							latLng: [24.860735, 67.001137],
							name: 'Karachi',
						},
						{
							latLng: [41.00824, 28.978359],
							name: 'Istanbul',
						},
						{
							latLng: [35.689487, 139.691711],
							name: 'Tokyo',
						},
						{
							latLng: [23.12911, 113.264381],
							name: 'Guangzhou',
						},
						{
							latLng: [19.075983, 72.877655],
							name: 'Mumbai',
						},
						{
							latLng: [40.7127837, -74.0059413],
							name: 'New York',
						},
						{
							latLng: [34.052235, -118.243683],
							name: 'Los Angeles',
						},
						{
							latLng: [41.878113, -87.629799],
							name: 'Chicago',
						},
						{
							latLng: [29.760427, -95.369804],
							name: 'Houston',
						},
						{
							latLng: [33.448376, -112.074036],
							name: 'Phoenix',
						},
						{
							latLng: [51.507351, -0.127758],
							name: 'London',
						},
						{
							latLng: [48.856613, 2.352222],
							name: 'Paris',
						},
						{
							latLng: [55.755825, 37.617298],
							name: 'Moscow',
						},
						{
							latLng: [40.416775, -3.70379],
							name: 'Madrid',
						},
					]
				  });
				});
		}
	},
	// map end		
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
	  // fix menu scroll
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
		// Bottom To Top
		bottom_top: function(){  
			if($('#button').length > 0){
				
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
				$('html, body').animate({scrollTop:0}, '300');
				});
			}
		},
	// Bottom To Top
	// loader			
			loader: function () {
			jQuery(window).on('load', function() {
				$(".loader").fadeOut();
				$(".spinner").delay(500).fadeOut("slow");
			});
		}, 
	// loader
	// toggle menu
	toggle_menu: function(){
		$('.cn-toggle-btn').on('click',function(){
			$('body').toggleClass('menu-open');
		})
	},
	// toggle menu	
	// counter
	counter: function () {
		$.fn.jQuerySimpleCounter = function (options) {
		  var settings = $.extend(
			{
			  start: 0,
			  end: 100,
			  easing: "swing",
			  duration: 400,
			  complete: "",
			},
			options
		  );
		  var thisElement = $(this);
		  $({
			count: settings.start,
		  }).animate(
			{
			  count: settings.end,
			},
			{
			  duration: settings.duration,
			  easing: settings.easing,
			  step: function () {
				var mathCount = Math.ceil(this.count);
	  
				thisElement.text(mathCount + "+");
			  },
			  complete: settings.complete,
			}
		  );
		};
		$("#counting1").jQuerySimpleCounter({
		  end: $("#counting1").data('to'),
		  duration: 3000,
		});
		$("#counting2").jQuerySimpleCounter({
		  end: $("#counting2").data('to'),
		  duration: 3000,
		});
		$("#counting3").jQuerySimpleCounter({
			end: $("#counting3").data('to'),
			duration: 3000,
		  });
	  },
	// counter
	
	};
	Consulting.init();	

}(jQuery));