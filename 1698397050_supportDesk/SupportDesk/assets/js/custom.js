/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var supportdesk = {
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
            this.loader();
            this.toggle();
            this.textslider();
            this.textslider1();
            this.textslider2();
            this.textslider3();
            this.textslider4();
            this.textslider5();
            this.textslider6();
            this.textslider7();
            this.counter();
            this.teamslider();
            this.bottom_top();
            this.sticky_header();
            this.navbar();
        },

        /*-------------- Design Functions Calling ---------------------------------------------------
        --------------------------------------------------------------------------------------------------*/

        // loader           
        loader: function() {
            jQuery(window).on('load', function() {
                $(".pg-loader").fadeOut();
                $(".pg-spinner").delay(500).fadeOut("slow");
            });
        },
        // loader
       
        // loader

        //Toggle
        toggle: function() {
            $(".pg-toggle-btn").on('click', function(e) {
                e.stopPropagation();
                $("body").toggleClass("menu-open");
            });
        },
        // text slider




        textslider: function() {
            var wordsss = [
                    "Hi There, How may I help you?"

                ],
                part,
                i = 0,
                offset = 0,
                len = wordsss.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= wordsss[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = wordsss[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word0").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

        },
        // ====================
        textslider1: function() {
            var word = [
                    " I'm Looking for New Job."

                ],
                part,
                i = 0,
                offset = 0,
                len = word.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word1").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });
        },
        // 
        textslider2: function() {
            var word2 = [
                    "Thank you For Connecting with us. Would you like to check out our newest Requirements. "

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word02").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 

        },
        // 
        textslider3: function() {
            var word2 = [
                    "Yes, But I want in IT field."

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word03").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 

        },
        // 
        textslider4: function() {
            var word2 = [
                    "Hi There, How may I help you?"

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word04").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 

        },
        // 
        textslider5: function() {
            var word2 = [
                    "Hey David, I would like to add card Payment to my new online store."

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word05").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 

        },
        // 
        textslider6: function() {
            var word2 = [
                    "Great! I would like to inform you for future information. please contact on 12"

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word06").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 

        },
        // 
        textslider7: function() {
            var word2 = [
                    "Sure, Thank you mate :)"

                ],
                part,
                i = 0,
                offset = 0,
                len = word2.length,
                forwards = true,
                skip_count = 0,
                skip_delay = 15,
                speed = 100;
            var wordflick = function() {
                setInterval(function() {
                    if (forwards) {
                        if (offset >= word2[i].length) {
                            ++skip_count;
                            if (skip_count == skip_delay) {
                                forwards = false;
                                skip_count = 0;
                            }
                        }
                    } else {
                        if (offset == 0) {
                            forwards = true;
                            i++;
                            offset = 0;
                            if (i >= len) {
                                i = 0;
                            }
                        }
                    }
                    part = word2[i].substr(0, offset);
                    if (skip_count == 0) {
                        if (forwards) {
                            offset++;
                        } else {
                            offset--;
                        }
                    }
                    $(".word07").text(part);
                }, speed);
            };

            $(document).ready(function() {
                wordflick();
            });

            // 
        },
      // counter
        counter: function() {
            $.fn.jQuerySimpleCounter = function(options) {
                var settings = $.extend({
                        start: 0,
                        end: 100,
                        easing: "swing",
                        duration: 400,
                        complete: ""
                    },
                    options
                );

                var thisElement = $(this);

                $({
                    count: settings.start
                }).animate({
                    count: settings.end
                }, {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function() {

                        var mathCount = Math.ceil(this.count);

                        thisElement.text(mathCount + 'k' + '+');
                    },
                    complete: settings.complete
                });
            };

            $("#number1").jQuerySimpleCounter({
                end: 56,
                duration: 3000
            });
            $("#number2").jQuerySimpleCounter({
                end: 66,
                duration: 3000
            });
            $("#number3").jQuerySimpleCounter({
                end: 36,
                duration: 2000
            });
            $("#number4").jQuerySimpleCounter({
                end: 86,
                duration: 2500
            });
            $("#number5").jQuerySimpleCounter({
                end: 84,
                duration: 2500
            });


        },
         // team slider           
         teamslider: function() {
            var swiper = new Swiper(".teamslider", {
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
        },

        // Bottom To Top
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
        // Bottom To Top
        sticky_header: function () {
            $(window).scroll(function () {
              var wh = window.innerWidth;
              {
                var h = window.innerHeight;
                var window_top = $(window).scrollTop() + 1;
                if (window_top > 100) {
                  $(".pp-header-wrapper").addClass("pp-header-fixed animated fadeInDown");
                } else {
                  $(".pp-header-wrapper").removeClass("pp-header-fixed animated fadeInDown");
                }
              }
            });
          },
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
   };
    supportdesk.init();

}(jQuery));