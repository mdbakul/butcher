$(function () {
    "use strict";
    // header move to offcanvus-area
    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }

    // Sidebar Js
    $(".tp-menu-bar").on("click", function () {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }


    /*====after click sub menu open in mobile =====*/
    $("ul>li>ul").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });

    /*====after click sub menu open in mobile =====*/
    $(".header__menu--menu2 ul>li>ul").parent("li").addClass("menu-item-has-children menu-item-has-children2");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });

    $('.header__menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (screen.width < 1200) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    })

    //Header   	
    var fixed_top = $(".header__bottom");
    $(window).on('scroll', function () {
        if (screen.width > 1200) {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("header-fixed animated fadeInDown");
            } else {
                fixed_top.removeClass("header-fixed animated fadeInDown");
            }
        }
    });


    // case slider start here
    $('.case__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Odometer compnay overview
    $(".odometer").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0; i < document.querySelectorAll(".odometer").length; i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });

    // case slider start here
    $('.testmonial__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.sponsor__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });


    // case slider start here
    $('.service2__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    var $grid = $(".casegallery__grid").isotope({
        transitionDuration: "0.9s",

    });
    // sort items on button click
    $(".item").on("click", function () {
        var filterValue = $(this).attr("data-sort-by");
        $grid.isotope({ filter: filterValue });
    });

    $(".item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // case slider start here
    $('.client__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // case slider start here
    $('.clientfeedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Search option start here
    $(document).on("click", ".searchbar .icon svg, .closer", function () {
        $(".orginalsearch").toggleClass("active");
    });

    // scroll up start here


    //contact form js
    $(function () {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function (e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

    // team function
    function teamclick() {
        // team 1
        $(".teamsocial1").on("click", function () {
            $(".teamicon1").addClass("social1_opened");
        });
        $(".thumbclick1").on("click", function () {
            $(".teamicon1").removeClass("social1_opened");
        });

        // team 2
        $(".teamsocial2").on("click", function () {
            $(".teamicon2").addClass("social2_opened");
        });
        $(".thumbclick2").on("click", function () {
            $(".teamicon2").removeClass("social2_opened");
        });

        // team 3
        $(".teamsocial3").on("click", function () {
            $(".teamicon3").addClass("social3_opened");
        });
        $(".thumbclick3").on("click", function () {
            $(".teamicon3").removeClass("social3_opened");
        });

        // team 4
        $(".teamsocial4").on("click", function () {
            $(".teamicon4").addClass("social4_opened");
        });
        $(".thumbclick4").on("click", function () {
            $(".teamicon4").removeClass("social4_opened");
        });

        // team 5
        $(".teamsocial5").on("click", function () {
            $(".teamicon5").addClass("social5_opened");
        });
        $(".thumbclick5").on("click", function () {
            $(".teamicon5").removeClass("social5_opened");
        });

        // team 6
        $(".teamsocial6").on("click", function () {
            $(".teamicon6").addClass("social6_opened");
        });
        $(".thumbclick6").on("click", function () {
            $(".teamicon6").removeClass("social6_opened");
        });
        // team 7
        $(".teamsocial7").on("click", function () {
            $(".teamicon7").addClass("social7_opened");
        });
        $(".thumbclick7").on("click", function () {
            $(".teamicon7").removeClass("social7_opened");
        });
        // team 8
        $(".teamsocial8").on("click", function () {
            $(".teamicon8").addClass("social8_opened");
        });
        $(".thumbclick8").on("click", function () {
            $(".teamicon8").removeClass("social8_opened");
        });

    }
    teamclick();




    // wow animation
    new WOW().init();
});


$('.preloader__logo img').addClass('logo-blink');
(function () {
    function id(v) { return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("loading"),
            prog = id("tp-loading-line"),
            img = document.images,
            c = 0,
            tot = img.length;
        if (tot == 0) return doneLoading();

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;

            if (c === tot) return doneLoading();
        }
        function doneLoading() {

            setTimeout(function () {
                $("#loading").fadeOut(500);
            }, 100);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());