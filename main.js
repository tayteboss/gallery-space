console.log("workings")

$(document).ready(fadeIn)
$('.how-arrow').hover(arrowHover)
$('article').hover(articleHover)

function fadeIn() {
    $('.animate').addClass('make-visible')
    $('.animate-color-black').addClass('make-black')
    $('.hr').addClass('make-width')

}

function arrowHover() {
    $(this).toggleClass('how-arrow-a')
}

function articleHover() {
    $('article').removeClass('delay-1000 delay-1100 delay-1200 delay-1300 delay-1400')
    $(this).toggleClass('article-hover article-fade')
    $('article').toggleClass('article-hover article-fade')
    setTimeout(function(){ 
    }, 250)
}
