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

                $('nav .nav-links li.link').css("padding", "6px 0");
            } else {
    
                $('nav .nav-links li.link').css("padding", "30px 0");
            }
        }
        
     
        // making the nav sticky to the top
        if($(window).scrollTop() > $('.top-nav').height()) {
        
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









});