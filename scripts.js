$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 78) {
            $('.myNav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 30) {
            $('.myNav').removeClass('navbar-fixed');
        }
    });






})