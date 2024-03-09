/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: CryptoCurrency
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var Cryptocurrency = {
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
      /*-------------- Cryptocurrency Design Functions Calling-------------------*/

      this.pp_counter();
      this.pp_binary_summary();
      this.pp_testimonial_slider();
      this.pp_toggle();
      this.pp_navbar();
      this.pp_sticky_header();
    },

    /*-------------- Cryptocurrency Design Functions Calling ------------------------*/


    /*--- Counter numbers----*/
    pp_counter:  function () {
      const counters = document.querySelectorAll(".pp-count");
      const speed = 100;
      counters.forEach((counter) => {
        const updateCount =  () => {
          const target = parseInt(+counter.getAttribute("data-target"));
          const count = parseInt(+counter.innerText);
          const increment = Math.trunc(target / speed);
          console.log(increment);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } 
        };
        updateCount();
      });
    },
    /*--- Counter numbers----*/

   /*--- Binary Summary----*/
    pp_binary_summary: function () {
      const ANIMATEDCLASSNAME = "animated";
      const ELEMENTS = document.querySelectorAll(".HOVER");
      const ELEMENTS_SPAN = [];
      ELEMENTS.forEach((element, index) => {
        let addAnimation = false;
        if (element.classList[1] == "FLASH") {
          element.addEventListener("animationend", e => {
            element.classList.remove(ANIMATEDCLASSNAME);
          });
          addAnimation = true;
        }
        if (!ELEMENTS_SPAN[index])
          ELEMENTS_SPAN[index] = element.querySelector("span");
        element.addEventListener("mouseover", e => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
          if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
        });
        element.addEventListener("mouseout", e => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
        });
      });
    },
    /*--- Binary Summary----*/

    /*--- Testimonial Slider----*/
    pp_testimonial_slider: function () {
      var swiper = new Swiper(".pp-testimonial-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        autoplay:false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
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
					  slidesPerView: 1,
					  spaceBetween: 30,
					},					
					280: {
					  slidesPerView: 1,
					  spaceBetween: 15,
					}
				}
      });
    },
    /*--- Testimonial Slider----*/

    /*--- Mobile Toggle----*/
    pp_toggle: function () {
      $('.pp-toggle-btn').on('click',function(){
				$('body').toggleClass('menu-open');
			})
    },
    /*--- Mobile Toggle----*/

    // Navbar
    pp_navbar: function() {
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
     pp_sticky_header: function () {
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
  };
Cryptocurrency.init();
}(jQuery));










