$(document).ready(function () {
    $('.nav__list img').on('mouseover',function () {
        let $currect_element = $(this)
        let $next_element = $(this).next()
        console.log($currect_element,$next_element)
        $($next_element).css({
            visibility: 'visible'
        })
        $($next_element).offset({
            top: `${$($currect_element).offset().top + 10}`,
            left: `${$($currect_element).offset().left - 200}`
        })
    })

    $('.nav__list img').on('mouse')
})