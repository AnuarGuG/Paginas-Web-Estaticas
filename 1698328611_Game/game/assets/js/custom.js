/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var game = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Design Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.gzloader();
            this.gztoggle();
            this.navbar();
            this.gzbannerslider();
            this.gzAboutSlider();
            this.gzLatestGame();
            this.gzGameTrailer();
            this.gzproductSlider();
            this.gzbottom_top();

        },

        /*-------------- Design Functions Calling ---------------------------------------------------
        --------------------------------------------------------------------------------------------------*/

        // loader           
        gzloader: function() {
            jQuery(window).on('load', function() {
                $(".gz-loader").fadeOut();
                $(".gz-spinner").delay(500).fadeOut("slow");
            });
        },
        // loader

        //Toggle
        gztoggle: function() {
            $(".gz-toggle-btn").on('click', function(e) {
                e.stopPropagation();
                $("body").toggleClass("menu-open");
            });
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

        // banner slider
        gzbannerslider: function() {
            var swiper = new Swiper(".gz-banner-slider", {
                slidesPerView: 3,
                spaceBetween: 50,
                direction: 'horizontal',
                initialSlide: 0,
                centeredSlides: true,
                loop: true,
                watchSlidesVisibility: true,

                navigation: {
                    nextEl: ".gz-banner-main .swiper-button-next",
                    prevEl: ".gz-banner-main .swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1700: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },

            });


        },
        // About  slider
        gzAboutSlider: function() {
            var swiper = new Swiper(".AboutSlider", {
                slidesPerView: 1,
                spaceBetween: 30,
                direction: 'horizontal',
                initialSlide: 0,
                loop: true,
                watchSlidesVisibility: true,

                navigation: {
                    nextEl: ".gz-about-slider-main .swiper-button-next",
                    prevEl: ".gz-about-slider-main .swiper-button-prev",
                },

            });

        },
        // Latest game
        gzLatestGame: function() {
            var swiper = new Swiper(".LatestGame", {
                slidesPerView: 7,
                spaceBetween: 18,
                speed: 700,
                parallax: false,
                navigation: {
                    nextEl: ".gz-game-slider-inner .swiper-button-next",
                    prevEl: ".gz-game-slider-inner .swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                },
            });
        },


        // game Trailer game
        gzGameTrailer: function() {
            var autoSwap = setInterval(swap, 3500);

            $("ul, span").hover(
                function() {
                    clearInterval(autoSwap);
                },

            );

            var items = [];
            var startItem = 1;
            var position = 0;
            var itemCount = $(".carousel li.items").length;
            var leftpos = itemCount;
            var resetCount = itemCount;

            $("li.items").each(function(index) {
                items[index] = $(this).text();
            });

            function swap(action) {
                var direction = action;

                if (direction == "counter-clockwise") {
                    var leftitem = $(".left-pos").attr("id") - 1;
                    if (leftitem == 0) {
                        leftitem = itemCount;
                    }

                    $(".right-pos").removeClass("right-pos").addClass("back-pos");
                    $(".main-pos").removeClass("main-pos").addClass("right-pos");
                    $(".left-pos").removeClass("left-pos").addClass("main-pos");
                    $("#" + leftitem + "")
                        .removeClass("back-pos")
                        .addClass("left-pos");

                    startItem--;
                    if (startItem < 1) {
                        startItem = itemCount;
                    }
                }

                if (direction == "clockwise" || direction == "" || direction == null) {
                    function pos(positionvalue) {
                        if (positionvalue != "leftposition") {
                            position++;

                            if (startItem + position > resetCount) {
                                position = 1 - startItem;
                            }
                        }

                        if (positionvalue == "leftposition") {
                            position = startItem - 1;

                            if (position < 1) {
                                position = itemCount;
                            }
                        }

                        return position;
                    }

                    $("#" + startItem + "")
                        .removeClass("main-pos")
                        .addClass("left-pos");
                    $("#" + (startItem + pos()) + "")
                        .removeClass("right-pos")
                        .addClass("main-pos");
                    $("#" + (startItem + pos()) + "")
                        .removeClass("back-pos")
                        .addClass("right-pos");
                    $("#" + pos("leftposition") + "")
                        .removeClass("left-pos")
                        .addClass("back-pos");

                    startItem++;
                    position = 0;
                    if (startItem > itemCount) {
                        startItem = 1;
                    }
                }
            }

            $("#next").click(function() {
                swap("clockwise");
            });

            $("#prev").click(function() {
                swap("counter-clockwise");
            });

            $(".gz-trailor-section ul li").click(function() {
                if ($(this).attr("class") == ".gz-trailor-section ul li items left-pos") {
                    swap("counter-clockwise");
                } else {
                    swap("clockwise");
                }
            });

        },
        // product slider
        gzproductSlider: function() {
            var swiper = new Swiper(".productSlider", {
                slidesPerView: 4,
                spaceBetween: 18,
                speed: 700,
                loop: true,
                parallax: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            });
        },
        // bottom to top
        gzbottom_top: function() {
            if ($('#button').length > 0) {

                var btn = $('#button');
                var fixed = $('.pp-header-wrapper');
                $(window).scroll(function() {
                    if ($(window).scrollTop() > 300) {
                        btn.addClass('show');
                        fixed.addClass('pp-header-fixed');
                    } else {
                        btn.removeClass('show');
                        fixed.removeClass('pp-header-fixed');
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
        // Bottom To Top
    };
    game.init();

}(jQuery));