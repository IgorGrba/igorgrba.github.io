// PRELOADER

(function ($) {
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
    $(window).on('load', function () {
        var preload = $('.preloader');
        preload.find('.spinner').fadeOut(function () {
            preload.fadeOut();
        });
        $('.lines').addClass('finish');
        setTimeout(function () {
            $('.lines').addClass('ready');
        }, 1200);
    });
})(jQuery);




$(document).ready(function () {



    (function ($) {
        /** change value here to adjust parallax level */
        var parallax = -0.5;

        var $bg_images = $(".lead-section");
        var offset_tops = [];
        $bg_images.each(function (i, el) {
            offset_tops.push($(el).offset().top);
        });

        $(window).scroll(function () {
            var dy = $(this).scrollTop();
            $bg_images.each(function (i, el) {
                var ot = offset_tops[i];
                $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
            });
        });
    })(jQuery);



    $(document).on('click', '.slideSlow[href^="#"]', function (event) {
        $('#main-menu').removeClass('show');
        $('.navbar-toggler').removeClass('active');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 160
        }, 1000);
    });




    //ANIMATIONS

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            if (position < scroll + windowHight - 50) {
                $(this).addClass(animation);
            }
        });
    }

    animation();
    $(window).scroll(function () {
        animation();
    });



    //HEADER

    $('.navbar-toggler').click(function () {
        $('body').toggleClass('menu-open');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('header').addClass('bg-header');
        }
    });


    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $('header').addClass('bg-header');
        } else {
            $('header').removeClass('bg-header');
        }
    });

    if ($(window).width() > 992) {
// TEXT - FLIP
        (function ($) {
            $.fn.flip = function (options) {
                var options = $.extend({
                    targetClass: '.m-flip_item'
                }, options);

                return this.each(function () {
                    var $this = $(this),
                            $target = $this.find(options.targetClass);

                    $this
                            .on({
                                'init.flip': function () {
                                    var targetFirst_height = $target.eq(0).height();

                                    $this
                                            .data('height', targetFirst_height)
                                            .css({height: targetFirst_height});
                                },
                                'mouseenter.flip': function () {
                                    $target.css({top: -$this.data('height') + 'px'});
                                },
                                'mouseleave.flip': function () {
                                    $target.css({top: 0 + 'px'});
                                }
                            })
                            .trigger('init.flip');
                });
            };
        }(jQuery));

        $(function () {
            $('.js-flip').flip();
        });
    }



});


