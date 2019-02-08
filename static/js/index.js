$(document).ready(function () {
    let $paragraphs = $('.nav__list p')
        .get()
    for(let i = 0; i < $paragraphs.length; i++) {
        $($paragraphs[i]).offset({
            top: $($paragraphs[i]).prev().offset().top
        })
        $($paragraphs[i]).css({
            height: $($paragraphs[i]).closest('li').outerHeight() - 10 + 'px'
        })
    }
    // $('.nav__list img').on('mouseover', function () {
    //     let $current = $(this),
    //         $next = $(this).next()
    //     $(next).css({
    //         visibility: '',
    //     })
    // })
    // $('.nav__list img').on('mouseout', function () {

    // })

    console.log($paragraphs)
})