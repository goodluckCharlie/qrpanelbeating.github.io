(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

    // Newsletter submit
    $('.newsletter .btn-primary').click(function() {
        var email = $(this).closest('.newsletter').find('#mail').val();
        if(email) {
            var subject = 'Newsletter Subscription';
            var body = email + ' has subscribed for updates';
            window.location.href = 'mailto:qrpanelbeating@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        }
    });

    // Contact form submit
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $('#submitBtn').prop('disabled', true).text('Sending...');
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: formData,
            success: function(response) {
                var res = JSON.parse(response);
                alert(res.message);
                if (res.status == 'success') {
                    $('#contactForm')[0].reset();
                }
            },
            error: function() {
                alert('An error occurred. Please try again.');
            },
            complete: function() {
                $('#submitBtn').prop('disabled', false).text('Submit Now');
            }
        });
    });
    
})(jQuery);

