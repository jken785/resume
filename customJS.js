
$(document).ready(function () {
    startupAnimation();
});

function startupAnimation() {
    $('body').animate({ opacity: "1" }, { duration: 500, queue: false });
    $('.ani').animate({marginTop: "20px"}, {duration: 500});
}

