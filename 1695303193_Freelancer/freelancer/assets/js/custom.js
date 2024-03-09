/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var freelancer = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Design Functions Calling ---------------------------------------------------
      ------------------------------------------------------------------------------------------------*/
      this.loader();
      this.toggle();
      this.stickyheader();
      this.sidebar();
      // this.skill();
      this.clientslider();
      this.counter();
      this.Isotop_gallery();
      this.Magnific_popup();
      this.check();
      this.bottom_top();
      this.navbar();
      this.sticky_header();
    },

    /*-------------- Design Functions Calling ---------------------------------------------------
    --------------------------------------------------------------------------------------------------*/
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
    // loader
    loader: function () {
      jQuery(window).on("load", function () {
        $(".fl-loader").fadeOut();
        $(".fl-spinner").delay(500).fadeOut("slow");
      });
    },
    // loader

    //Toggle
    toggle: function () {
      $(".fl-toggle-btn").on("click", function (e) {
        e.stopPropagation();
        $("body").toggleClass("menu-open");
      });
    },

    //sticky header
    stickyheader: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        if (wh > 767) {
          var h = window.innerHeight;
          var window_top = $(window).scrollTop() + 1;
          if (window_top > 100) {
            $(".fl-header-section").addClass("pp-header-fixed");
          } else {
            $(".fl-header-section").removeClass("pp-header-fixed");
          }
        }
      });
    },
    //  sidebar
    sidebar: function () {
      $(".fl-menu-box").click(function () {
        $("body").toggleClass("show-class");
      });
    },

    // Skill
    // skill: function () {
    //   let options = {
    //     startAngle: -1.5,
    //     size: 100,
    //     value: 0.95,

    //     fill: {
    //       gradient: ["#079596", "#079596"],
    //     },
    //   };
    //   $(".circle .bar")
    //     .circleProgress(options)
    //     .on("circle-animation-progress", function (event, progress, stepValue) {
    //       $(this)
    //         .parent()
    //         .find("span")
    //         .text(String(stepValue.toFixed(2).substr(2)) + "%");
    //     });

    //   $(".js .bar").circleProgress({
    //     value: 0.7,
    //     fill: {
    //       gradient: ["#ffbd54", "#ffbd54"],
    //     },
    //   });
    //   $(".node .bar").circleProgress({
    //     value: 0.95,
    //     fill: {
    //       gradient: ["#ff4366", "#ff4366"],
    //     },
    //   });
    //   $(".react .bar").circleProgress({
    //     value: 0.98,
    //     fill: {
    //       gradient: ["#45be93", "#45be93"],
    //     },
    //   });
    // },
    // Skill
    // client slider
    clientslider: function () {
      var swiper = new Swiper(".clientslider", {
        slidesPerView: 2,
        spaceBetween: 50,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1080: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          775: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          580: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          380: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      });
    },

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

              thisElement.text(mathCount);
            },
            complete: settings.complete,
          }
        );
      };

      $("#number1").jQuerySimpleCounter({
        end: $("#number1").data('to'),
        duration: 3000,
      });
      $("#number2").jQuerySimpleCounter({
        end: $("#number2").data('to'),
        duration: 3000,
      });
      $("#number3").jQuerySimpleCounter({
        end: $("#number3").data('to'),
        duration: 2000,
      });
      $("#number4").jQuerySimpleCounter({
        end: $("#number4").data('to'),
        duration: 2500,
      });
    },

    Isotop_gallery: function () {
      $(window).on("load", function () {
        $(".fl_gallery_grid").isotope({
          itemSelector: ".grid-item",
          filter: "*",
        });
        $(".fl_project_gallery > .fl_gallery_nav > ul > li").on(
          "click",
          "a",
          function () {
            // filter button click
            var filterValue = $(this).attr("data-filter");
            $(".fl_gallery_grid").isotope({ filter: filterValue });

            //active class added
            $("a").removeClass("gallery_active");
            $(this).addClass("gallery_active");
          }
        );
      });

      $("#loadMore").on("click", function () {
        $(".fl_view_gallery").addClass("fl_view_gallery_view");
        $(".fl_gallery_grid").isotope({
          itemSelector: ".grid-item",
          filter: "*",
        });
      });
    },

    // Star isotop gallery js

    // magnifiv popup for project gallery
    Magnific_popup: function () {
      if ($(".view").length > 0) {
        $(".view").magnificPopup({
          type: "image",

          gallery: {
            enabled: true,
          },
        });
      }
    },
    // check princing table
    check: function () {
      var checkBox = document.getElementById("checbox");
      var text1 = document.getElementsByClassName("text1");
      var text2 = document.getElementsByClassName("text2");

      for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
          text1[i].style.display = "block";
          text2[i].style.display = "none";
        } else if (checkBox.checked == false) {
          text1[i].style.display = "none";
          text2[i].style.display = "block";
        }
      }
    },
    // check princing table

    // Bottom To Top
    bottom_top: function () {
      if ($("#button").length > 0) {
        var btn = $("#button");

        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass("show");
          } else {
            btn.removeClass("show");
          }
        });

        btn.on("click", function (e) {
          e.preventDefault();
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            "300"
          );
        });
      }
    },
    // Bottom To Top
  };
  freelancer.init();
})(jQuery);
//

function check() {
  var checkBox = document.getElementById("checbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
check();
