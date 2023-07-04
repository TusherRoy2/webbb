$(document).ready(function (){

    // Code Starts Here

    // !Scroll Top Btn

    $(window).scroll(function() {
        let scrlTop = $(window).scrollTop();
        if (scrlTop > 100) {
            $('a#ScrlTopBtn').fadeIn()
        }
        else{
            $('a#ScrlTopBtn').fadeOut()
        }
    })


    // !Owl Carousel 3

    $('.buyCarousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        navText:['<span><i class="fas fa-greater-than"></i></span>' , '<span><i class="fas fa-less-than"></i></span>'],
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // !Owl Carousel 2

    $('.clientCarousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        navText:['<span><i class="fas fa-greater-than"></i></span>' , '<span><i class="fas fa-less-than"></i></span>'],
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('header nav .menu ul li a').click(function (){
        $('header nav .menu ul li a').removeClass('active');
        $(this).addClass('active');
    })

    $('header nav .menu ul li a img').click(function (){
        $(this).removeClass('active');
    });

    $('header nav .menu .closeIcon i').click(function (){
        $('header nav .menu').animate({
            'right' : '-10000rem',
        }, "slow");
    });

    $('header nav .bar button').click(function (){
        $('header nav .menu').animate({
            'right' : '0',
        }, "slow");
    });


    // !Owl Carousel1

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:12000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText:['<span><i class="fas fa-greater-than"></i></span>' , '<span><i class="fas fa-less-than"></i></span>'],
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })





})