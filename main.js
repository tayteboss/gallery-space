console.log("workings")

$(document).ready(fadeIn)
$('.how-arrow').hover(arrowHover)
$('article').hover(articleHover)
$('#logo').hover(showAbout)

function fadeIn() {
    $('.animate').addClass('make-visible')
    $('.hr').addClass('make-width')

}

function arrowHover() {
    $(this).toggleClass('how-arrow-a')
}

function articleHover() {
    $('article').removeClass('delay-1000 delay-1100 delay-1200 delay-1300 delay-1400')
    $('article').toggleClass('article-hover article-fade')
    $(this).toggleClass('article-hover article-fade')
}

function showAbout() {
    $('#about').toggleClass('show-about')
}