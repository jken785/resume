$(document).ready(function() {
    setMainMargin();
    setContactInfoFormat();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startupAnimation();
});

$(window).resize(function() {
    setContactInfoFormat();
});

function setContactInfoFormat() {
    if ($(window).width() < 768) {
        $('#contactTable').html('<tr><td class="left">785 Snowbird Lane</td></tr><tr><td class="left">Lafayette, CO 80026</td></tr><tr><td>720-545-6432</td></tr><tr><td><a href="mailto:jake.kendrick@gmail.com">jake.kendrick@gmail.com</a></td></tr>');
    } else {
        $('#contactTable').html('<tr><td class="left">785 Snowbird Lane</td><td>720-545-6432</td></tr><tr><td class="left">Lafayette, CO 80026</td><td><a href="mailto:jake.kendrick@gmail.com">jake.kendrick@gmail.com</a></td></tr>');
    }
}

function setMainMargin() {
    let headerHeight = $('#header-container').outerHeight();
    let mainMargin = String(headerHeight + 40) + "px";
    $('#main').css({
        "padding-top": mainMargin
    });
}

function startupAnimation() {
    $('body').animate({ opacity: "1" }, { duration: 500, queue: false });
    $('.ani').animate({ marginTop: "60px" }, { duration: 500 });
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
        $('#contactAux').css({
            'top': '-40px',
            'opacity': '1'
        });
    } else if (scroll > 0 && scroll < 150) {
        if (isScrolledDown) {
            if ($(window).width() > 768) {
                $('#contactAux').animate({ top: "-40px" }, { duration: 200 });

            } else {
                $('#contactAux').animate({ opacity: "0" }, { duration: 200 });
                $('#contactAux').css({
                    'top': '-40px',
                    'opacity': '1'
                });
            }
            isScrolledDown = false;
        }
        let newHeight = String(origImgHeight - (scroll)) + "px";
        $('.photo > img').css({
            'height': newHeight
        });

        let newOpacity = String(1 - (scroll / 75));
        $('#contact td').css({
            'opacity': newOpacity
        });
        $('#contact').css({
            'display': 'block'
        });

        if ($(window).width() > 768) {
            $('#header-container').css({
                'padding-bottom': String(20 - (scroll / 10)) + "px",
                'padding-top': String(20 - (scroll / 10)) + "px"
            });
        } else {
            $('#header-container').css({
                'padding-bottom': String(20 + (scroll / 20)) + "px",
                'padding-top': String(20 - (scroll / 10)) + "px"
            });
        }


        if ($(window).width() > 768) {
            $('h1').css({
                'font-size': String(4 - (scroll / 75)) + "vw"
            });
        }

        $('.nameAndContact').css({
            'margin-top': String(-50 + (scroll / 3)) + "px"
        });
    } else {
        if (!isScrolledDown) {
            if ($(window).width() > 768) {
                $('#contactAux').animate({ top: "20px" }, { duration: 200 });
            } else {
                $('#contactAux').css({
                    'top': '60px',
                    'opacity': '0'
                });
                $('#contactAux').animate({ opacity: "1" }, { duration: 200 });
            }
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

            if ($(window).width() > 768) {
                $('h1').css({
                    'font-size': "2vw"
                });
            }

        }
    }

});

var showActive = true;
$('#classToggle').click(function() {
    if (showActive) {
        $('#classToggle').text("Hide Classes");
        showActive = false;
    } else {
        $('#classToggle').text("Show Classes");
        showActive = true;
    }
});

$(function() {
    $('[data-toggle="popover"]').popover()
});

$('.popover-dismiss').popover({
    trigger: 'focus'
});