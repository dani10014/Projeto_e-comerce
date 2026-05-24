export function iniciarCarroselSlick(){

    $(".container-base-card").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
        mobileFirst:true,
        
        responsive:[
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
            },
            {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                }
            }
        ]
    })
    $(".menu-vertical__imagens-produto").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
    })
}