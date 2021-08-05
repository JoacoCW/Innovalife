!(function($) {
    "use strict";

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

    // Testimonials carousel (uses the Owl Carousel library)
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

    // Testimonials carousel (uses the Owl Carousel library)
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
