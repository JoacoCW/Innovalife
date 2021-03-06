!(function($) {
    "use strict";
    $(window).on('load', function() {

        // Hero typed
        if ($('.typed').length) {
            var typed_strings = $(".typed").data('typed-items');
            typed_strings = typed_strings.split(',')
            new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
            });
        }

        // Trabajos carousel (uses the Owl Carousel library)
        $(".trabajos-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        });

        // Tecnologias carousel (uses the Owl Carousel library)
        $(".tecnologias-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                900: {
                    items: 6
                }
            }
        });

        // Valores carousel (uses the Owl Carousel library)
        $(".valores-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                900: {
                    items: 4
                }
            }
        });

        // Servicios carousel (uses the Owl Carousel library)
        $(".servicios-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                900: {
                    items: 1
                }
            }
        });
    });
})(jQuery);

function mostrarPaginas() {
    document.getElementById("trabajos1").classList.remove('noMostrar');
    document.getElementById("trabajos2").classList.add('noMostrar');
    document.getElementById("trabajos3").classList.add('noMostrar');    
    document.getElementById("trabajos4").classList.add('noMostrar');
}

function mostrarApps() {
    document.getElementById("trabajos1").classList.add('noMostrar');
    document.getElementById("trabajos2").classList.remove('noMostrar');
    document.getElementById("trabajos3").classList.add('noMostrar');
    document.getElementById("trabajos4").classList.add('noMostrar');
}

function mostrarOtros() {
    document.getElementById("trabajos1").classList.add('noMostrar');
    document.getElementById("trabajos2").classList.add('noMostrar');
    document.getElementById("trabajos3").classList.remove('noMostrar');
    document.getElementById("trabajos4").classList.add('noMostrar');
}

function mostrarDiseno() {
    document.getElementById("trabajos1").classList.add('noMostrar');
    document.getElementById("trabajos2").classList.add('noMostrar');
    document.getElementById("trabajos3").classList.add('noMostrar');
    document.getElementById("trabajos4").classList.remove('noMostrar');
}
