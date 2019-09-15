$(document).ready(function() {
    setMainMargin();
    $(document).scrollTop(0);
    startupAnimation();
});

function setMainMargin() {
    let headerHeight = $('#header-container').outerHeight();
    let mainMargin = String(headerHeight + 40) + "px";
    $('#main').css({
        "margin-top": mainMargin
    });
}

function startupAnimation() {
    $('body').animate({ opacity: "1" }, { duration: 500, queue: false });
    $('.ani').animate({ marginTop: "20px" }, { duration: 500 });
}

$(window).resize(function() {
    let width = $(window).width();
    if (width <= 768) {
        $('#main').removeClass('container').addClass('container-fluid');
    } else {
        $('#main').removeClass('container-fluid').addClass('container');
    }
});

var isScrolledDown = false;
let origImgHeight = parseInt($('.photo > img').css('height'), 10);
$(document).scroll(function() {
    let scroll = $(document).scrollTop();

    if (scroll <= 0) {
        $('.photo > img').css({
            'height': String(origImgHeight)
        });

        $('#contact td').css({
            'opacity': "1"
        });
        $('.nameAndContact').css({
            'margin-top': '-50px'
        });
        $('h1').css({
            'font-size': "4vw"
        });
    } else if (scroll > 0 && scroll < 150) {
        if (isScrolledDown) {
            $('#contactAux').animate({ top: "-40px" }, { duration: 250 });
            isScrolledDown = false;
        }
        let newHeight = String(origImgHeight - (scroll)) + "px";
        $('.photo > img').css({
            'height': newHeight
        });

        let newOpacity = String(1 - (scroll / 150));
        $('#contact td').css({
            'opacity': newOpacity
        });
        $('#contact').css({
            'display': 'block'
        });

        $('#header-container').css({
            'padding-bottom': String(20 - (scroll / 10)) + "px",
            'padding-top': String(20 - (scroll / 10)) + "px"
        });

        $('h1').css({
            'font-size': String(4 - (scroll / 75)) + "vw"
        });

        $('.nameAndContact').css({
            'margin-top': String(-50 + (scroll / 3)) + "px"
        });
    } else {
        if (!isScrolledDown) {
            $('#contactAux').animate({ top: "20px" }, { duration: 400 });
            isScrolledDown = true;
            $('.photo > img').css({
                'height': "50px"
            });
            $('#contact td').css({
                'opacity': '0'
            });
            $('#contact').css({
                'display': 'none'
            });
            $('.nameAndContact').css({
                'margin-top': '0px'
            });
            $('h1').css({
                'font-size': "2vw"
            });
        }
    }

});

$(function() {
    $('[data-toggle="popover"]').popover()
});

$('.popover-dismiss').popover({
    trigger: 'focus'
});