$("#writing-to-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 1000);
});

$("#writing-to-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#work-to-writing").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#writing").offset().top
    }, 1000);
});

$("#work-to-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#about-to-writing").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#writing").offset().top
    }, 1000);
});

$("#about-to-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 1000);
});