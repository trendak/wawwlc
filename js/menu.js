$(document).ready(function() {
    $('#menuToggle').click(function() {
        $(".menu-fixed").toggleClass('open-menu');
        $(this).toggleClass('open');
        $('nav').toggleClass("show-menu");
    });
});