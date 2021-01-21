$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.logo').css('visibility', "visible");
        } else {
            $('.navbar').removeClass("sticky");
            $('.logo').css('visibility', "hidden");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(() => {
        $('html').animate({ scrollTop: 0 });
    });

    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});