$(document).ready(function () {


    /*
    **********************
    ** making the nav sticky to the top
    **********************
    */
    $(window).on('scroll', function () {
        
        //adjusting the height of nav on scroll
        if ($(window).innerWidth() > 991) {
            if($(window).scrollTop() > $('.top-nav').height()) {
                
                //adjusting the slider top marging when scroll
                //to prevent a proplem when the nav links takes position fixed
                $('.slider').css({
                    marginTop: $('.nav-links').height()
                });

                $('nav .nav-links li.link').css("padding", "6px 0");
            } else {
    
                $('.slider').css({
                    marginTop: 0
                })
    
                $('nav .nav-links li.link').css("padding", "30px 0");
            }
        } else if ($(window).innerWidth() < 991) {

            if($(window).scrollTop() > $('.top-nav').height()) {
                $('.slider').css({
                    marginTop: $('nav').height()
                });

            } else {
                $('.slider').css({
                    marginTop: 0
                });    
            }
        }
        
     
        // making the nav sticky to the top
        if($(window).scrollTop() > $('.top-nav').height()) {
            
            // give nav links position fixed on scroll
            $('nav').css({
                position: 'fixed',
                top: 0
            });
        } else {

            $('nav').css({
                position: 'relative',
            });
        }
    });


    // adjusting the position of the sublinks 
    $(window).on('resize load', function () {
        if ($(window).innerWidth() > 991) {
            $('.nav-links .box').css({
                bottom: - $('.nav-links .box').outerHeight()
            });
        } else {
            $('.nav-links .box').css({
                bottom:  0
            });
        }
    });

    //showing sublinks when hover on main links
    $(window).on('load resize', function() {
        if ($(window).innerWidth() > 991) {
            $('nav .nav-links li.link').off('click');
            $('nav .nav-links li.link').hover(function () {
    
                $($(this).data('class')).css('display', 'block')
            }, function () {
        
                $($(this).data('class')).css('display', 'none')
            });    
        } else {
            $('nav .nav-links li.link').off();
            $('nav .nav-links li.link').click(function() {
                $($(this).data('class')).slideToggle();
            });
        }    
    })

    //slide down nav links when click on bars
    $('.bars').on('click', function () {

        $('.nav-links').slideToggle()

    });

    /*
    **********************
    ** card courses overlay animation
    **********************
    */
    $('.course .course-item .card-img-top').hover(function () {

        $(this).find('.overlay')
            .animate({width: '100%'}, 300)
            .animate({width: '90%'}, 100)
            .animate({width: '100%'}, 100)

    }, function () {

        $(this).find('.overlay')
            .animate({width: "0%"}, 500);
    });





    new WOW().init();

    $('.owl-carousel').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',      
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]        
    })

});