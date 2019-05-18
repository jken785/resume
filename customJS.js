
$(document).ready(function () {
    startupAnimation();
});

function startupAnimation() {
    $('body').animate({ opacity: "1" }, { duration: 500, queue: false });
    $('.ani').animate({ marginTop: "20px" }, { duration: 500 });
}

$(window).resize(function () {
    let width = $(window).width();
    if (width <= 768) {
        $('#main').removeClass('container').addClass('container-fluid');
    } else {
        $('#main').removeClass('container-fluid').addClass('container');
    }
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})