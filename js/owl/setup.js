$('.owl-carousel').owlCarousel({
    loop:true, //False para o Carrosel
    margin:10,
    nav:false, //True deixa as setas de direção
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})