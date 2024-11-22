$(function () {

    const allmedia = window.matchMedia("(max-width: 767px)");

    // feture section animatin start here
    function fetureshape() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".feture__shape", {
                    y: 150,
                    duration: 2,
                    borderRadius: "50%",
                    backgroundColor: '#2D50CE',
                });
            } else {
                gsap.to(".feture__shape", {
                    y: 0,
                    duration: 4,
                    borderRadius: "50%",
                    backgroundColor: '#EF495E',
                });
            }

        });

        gsap.from(".feture .feture__inner", {
            y: 200,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.feture .feture__inner',
                scroller: 'body',
                start: "top 95%",
            }
        });

    }


    // about start here
    function aboutbullet() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".about__bullet.bullet1", {
                    x: 350,
                    duration: 5,

                });
            } else {
                gsap.to(".about__bullet.bullet1", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".about__bullet.bullet2", {
                    x: 550,
                    duration: 5,

                });
            } else {
                gsap.to(".about__bullet.bullet2", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".about__bullet.bullet3", {
                    y: 450,
                    duration: 5,

                });
            } else {
                gsap.to(".about__bullet.bullet3", {
                    y: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".about__bullet.bullet4", {
                    y: 0,
                    duration: 5,

                });
            } else {
                gsap.to(".about__bullet.bullet4", {
                    y: -450,
                    duration: 4,
                });
            }
        });
    }

    //  case start here  

    function caseanimation() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet1", {
                    y: 500,
                    duration: 5,

                });
            } else {
                gsap.to(".case__bullet.bullet1", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet2", {
                    y: -500,
                    duration: 4,

                });
            } else {
                gsap.to(".case__bullet.bullet2", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet3", {
                    x: -600,
                    duration: 4,

                });
            } else {
                gsap.to(".case__bullet.bullet3", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet4", {
                    x: 400,
                    duration: 4,

                });
            } else {
                gsap.to(".case__bullet.bullet4", {
                    x: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet5 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            } else {
                gsap.to(".case__bullet.bullet5 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet6 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            } else {
                gsap.to(".case__bullet.bullet6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            }
        });
    }


    // working process here

    function workingprocess() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape1", {
                    y: 600,
                    duration: 2,

                });
            } else {
                gsap.to(".working__shape.shape1", {
                    y: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape2", {
                    y: -500,
                    duration: 4,

                });
            } else {
                gsap.to(".working__shape.shape2", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape3", {
                    x: -600,
                    duration: 4,

                });
            } else {
                gsap.to(".working__shape.shape3", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape4", {
                    x: 400,
                    duration: 4,

                });
            } else {
                gsap.to(".working__shape.shape4", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape5", {
                    y: 300,
                    duration: 4,

                });
            } else {
                gsap.to(".working__shape.shape5", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".working__shape.shape6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            } else {
                gsap.to(".working__shape.shape7 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".case__bullet.bullet6 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            } else {
                gsap.to(".case__bullet.bullet6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            }
        });

        gsap.to(".working__shape.shape8", {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    }


    //pricning animation 

    function pricinganimation() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet1", {
                    y: 800,
                    duration: 3,
                });
            } else {
                gsap.to(".pricing__bullet.bullet1", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet2", {
                    y: -800,
                    duration: 3,

                });
            } else {
                gsap.to(".pricing__bullet.bullet2", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet3", {
                    x: -600,
                    duration: 3,

                });
            } else {
                gsap.to(".pricing__bullet.bullet3", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet4", {
                    x: 400,
                    duration: 4,

                });
            } else {
                gsap.to(".pricing__bullet.bullet4", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet8", {
                    x: 800,
                    duration: 4,

                });
            } else {
                gsap.to(".pricing__bullet.bullet8", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet5 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            } else {
                gsap.to(".pricing__bullet.bullet5 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".pricing__bullet.bullet6 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            } else {
                gsap.to(".pricing__bullet.bullet6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            }
        });

        gsap.to(".pricing__bullet.bullet7 img", {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    }



    // blog section start here
    function bloganimation() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet1", {
                    y: 400,
                    duration: 3,
                });
            } else {
                gsap.to(".blog__bullet.bullet1", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet2", {
                    y: 300,
                    duration: 3,
                });
            } else {
                gsap.to(".blog__bullet.bullet2", {
                    y: 0,
                    duration: 3,
                });
            }
        });
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet3", {
                    x: -400,
                    duration: 3,
                });
            } else {
                gsap.to(".blog__bullet.bullet3", {
                    x: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet4", {
                    y: 400,
                    duration: 3,
                });
            } else {
                gsap.to(".blog__bullet.bullet4", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet8", {
                    x: -450,
                    duration: 3,
                });
            } else {
                gsap.to(".blog__bullet.bullet8", {
                    x: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet5 img", {
                    rotate: 7200,
                    duration: 15,

                })
            } else {
                gsap.to(".blog__bullet.bullet5 img", {
                    rotate: -7200,
                    duration: 10,

                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".blog__bullet.bullet6 img", {
                    rotate: -7200,
                    duration: 10,

                })
            } else {
                gsap.to(".blog__bullet.bullet6 img", {
                    rotate: 7200,
                    duration: 15,

                })
            }
        });

        gsap.to(".blog__bullet.bullet7 img", {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
        });
    }

    // footer sectin start here
    function footeranimation() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".footer__bullet.bullet1", {
                    y: 380,
                    duration: 3,
                });
            } else {
                gsap.to(".footer__bullet.bullet1", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".footer__bullet.bullet2", {
                    x: 800,
                    duration: 5,
                });
            } else {
                gsap.to(".footer__bullet.bullet2", {
                    y: 0,
                    duration: 5,
                });
            }
        });
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".footer__bullet.bullet3", {
                    y: 300,
                    duration: 3,
                });
            } else {
                gsap.to(".footer__bullet.bullet3", {
                    y: 0,
                    duration: 3,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".footer__bullet.bullet4", {
                    x: -900,
                    duration: 3,
                });
            } else {
                gsap.to(".footer__bullet.bullet4", {
                    x: 0,
                    duration: 3,
                });
            }
        });

    }


    // services start here
    function servicesanimatoin() {
        gsap.from(".services .services__any", {
            y: 60,
            duration: 0.5,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.services .services__any',
                scroller: 'body',
                start: "top 90%",
            }
        })
    }


    // client sectin start here
    function clientanimation() {
        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape1", {
                    y: 600,
                    duration: 2,

                });
            } else {
                gsap.to(".client__shape.shape1", {
                    y: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape2", {
                    y: -500,
                    duration: 4,

                });
            } else {
                gsap.to(".client__shape.shape2", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape3", {
                    x: -600,
                    duration: 4,

                });
            } else {
                gsap.to(".client__shape.shape3", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape4", {
                    x: 400,
                    duration: 4,

                });
            } else {
                gsap.to(".client__shape.shape4", {
                    x: 0,
                    duration: 4,
                });
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape5", {
                    y: 300,
                    duration: 4,

                });
            } else {
                gsap.to(".client__shape.shape5", {
                    y: 0,
                    duration: 4,
                });
            }
        });


        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            } else {
                gsap.to(".client__shape.shape7 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.bullet6 img", {
                    rotate: -7200,
                    duration: 10,
                    ease: 'none',
                })
            } else {
                gsap.to(".client__shape.bullet6 img", {
                    rotate: 7200,
                    duration: 15,
                    ease: 'none',
                })
            }
        });

        window.addEventListener('wheel', function (value) {
            if (value.deltaY > 0) {
                gsap.to(".client__shape.shape8", {
                    x: -1200,
                    duration: 4,

                });
            } else {
                gsap.to(".client__shape.shape8", {
                    x: 0,
                    duration: 4,
                });
            }
        });

    }

    // banner two start here
    function banner2animation() {
        gsap.from(".banner__leftshapepage3 img", {
            x: -20,
            duration: 3,
            repeat: -1,
        });

        gsap.from(".banner__rightshapepage3 img", {
            y: -20,
            duration: 3,
            repeat: -1,
        });

    }



    // common img here
    function forallimg() {

        gsap.to(".allcomming__animation .item2 img", {
            y: -20,
            delay: 2,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
        gsap.to(".allcomming__animation .item3 img", {
            x: -20,
            delay: 2,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    }

    // banner two start here
    function banertwo() {

        gsap.to(".banner__rightimage--rightimage2 img", {
            x: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    }
    fetureshape();

    // Run animation on desktop, but skip it on mobile
    if (!allmedia.matches) {
        aboutbullet();
        caseanimation();
        workingprocess();
        pricinganimation();
        bloganimation();
        footeranimation();
        servicesanimatoin();
        clientanimation();
        banner2animation();
        forallimg();
        banertwo();
    }

});