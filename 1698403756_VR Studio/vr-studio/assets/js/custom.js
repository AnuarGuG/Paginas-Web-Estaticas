/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: VR Studio
-------------------------------------------------------------------*/

(function ($) {
  "use strict";
  var Vrstudio = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Vrstudio Design Functions Calling-------------------*/

      this.vr_loader();
      this.vr_toggle();
      this.vr_product_slider();
      this.vr_testimonial_slider();
      this.vr_vdo_banner_slider();
      this.vr_partner_slider();
      this.vr_cart_popup();
      this.vr_nav_toggle();
      this.navbar();
      this.sticky_header();
    },

    /*-------------- Vrstudio Design Functions Calling ------------------------*/
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
    /*----Loader----*/
    vr_loader: function loader() {
      var myVar;
      myVar = setTimeout(showPage, 1000);
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
    },
    /*----Loader----*/

    /*----toggle----*/
    vr_toggle: function loader() {
      $(".fl-menu-box").click(function () {
        $("body").toggleClass("toggle_menu");
      });
    },
    /*----toggle----*/

    /*----Owl Product Slider----*/
    vr_product_slider: function () {
      $(".vr-product-content .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          425: {
            items: 1,
            nav: false,
          },
          768: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
            loop: false,
          },
        },
      });
    },
    /*----Owl Product Slider----*/

    /*----Testimonial Slider----*/
    vr_testimonial_slider: function () {
      var swiper = new Swiper(".vr-testimonial-slide", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: true,
        // },
        loopFillGroupWithBlank: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    /*----Testimonial Slider----*/

    /*----Vedio Banner Slider----*/
    vr_vdo_banner_slider: function () {
      var swiper = new Swiper(".vr-vdo-banner-slide", {
        effect: "coverflow",
        initialSlide: 1,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        centeredSlidesBounds: true,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: true,
        // },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
    /*----Vedio Banner Slider----*/

    /*----Partners Slider----*/
    vr_partner_slider: function () {
      $(".vr-partners .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        },
      });
    },
    /*----Partners Slider----*/

    /*----Cart Button Popup----*/
    vr_cart_popup: function () {
      $(document).ready(function () {
        $(".vr-cart-btn").on("click", function () {
          $(".vr-shopping-cart").fadeToggle("fast");
        });
      });
      $(document).ready(function () {
        $(".vr-vdo-pause ").click(function () {
          $(".vr-video-box").fadeToggle("fast");
        });
      });
    },
    /*----Cart Button Popup----*/

    /*----Navigation Toggle----*/
    vr_nav_toggle: function () {
      $(document).ready(function () {
        $("#open-popup").click(function () {
          $(".vr-video-box").show();
        });
        $(".mfp-close").click(function () {
          $(".vr-video-box").hide();
        });
      });
    },
    /*----Navigation Toggle----*/
  };
  Vrstudio.init();
})(jQuery);
