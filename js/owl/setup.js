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

$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})