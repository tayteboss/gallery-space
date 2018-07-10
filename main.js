console.log("workings")

$(document).ready(fadeIn)
$('.how-arrow').hover(arrowHover)
$('article').hover(articleHover)
$('#logo').hover(showAbout)

function fadeIn() {
    console.log('fadein')
    $('.animate').addClass('make-visible')

}

function arrowHover() {
    console.log('hover')
    $(this).toggleClass('how-arrow-a')
}

function articleHover() {
    console.log('articlehover')
    $('article').removeClass('delay-1000 delay-1100 delay-1200 delay-1300 delay-1400')
    $('article').toggleClass('article-hover article-fade')
    $(this).toggleClass('article-hover article-fade')
}

function showAbout() {
    console.log('show')
    $('#about').toggleClass('show-about')
}