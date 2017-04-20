$(document).ready(function() {
    new WOW().init();
    $("html").niceScroll({
        cursorcolor: "#DF1B1B",
        cursorfixedheight: 40,
        zindex: 2000000,
        background: "rgba(10,10,10,.5)",
        cursorborder: "0px solid #f00"
    });
    $(".carousel").carousel({
        interval: 2500
    });

    $('.slider4').bxSlider({
        slideWidth: 600,
        minSlides: 3,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 2
    });

    $(".bx-next").hide();
    $(".bx-prev").hide();

    setInterval(function() {
        $(".bx-next").click();
    }, 3500);



    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

    }

    $('#ContactSection').hover(function() {
        $(this).find('#ContactBtn').show();
    }, function() {
        $(this).find('#ContactBtn').hide();
    });


    $("#ContactBtn").click(function() {
        if ($("#ContactSection").is(':visible')) {
            $("#ContactSection").animate({ width: 'hide' });
            $(".div-arrow").animate({ width: 'show' });

        } else {
            $("#ContactSection").animate({ width: 'show' });

        }

    });
    $(".div-arrow").click(function() {
        $(".div-arrow").hide();
        $("#ContactSection").animate({ width: 'show' });
    });
    var ScrollBtn = $("#ScrollToTop");
    var TeamLi = $("#TeamLi");
    var ClientsLi = $("#ClientsLi");
    var ContactLi = $("#ContactLi");
    var HomeLi = $("#HomeLi");

    function RemoveActiveClass() {
        var NavbarTabsLi = $("#NavbarTabs li");
        for (var i = 0; i < NavbarTabsLi.length; i++) {
            NavbarTabsLi[i].className = "";
        }

    }

    $(window).scroll(function() {
        if ($(window).width() >= 1200) {
            var ScrollPosition = $(this).scrollTop();
            if (ScrollPosition >= 630) {
                ScrollBtn.show();
            } else {
                ScrollBtn.hide();
            }
            if (ScrollPosition < 1835) {
                RemoveActiveClass();
                HomeLi.addClass("active");
            } else if (ScrollPosition > 1815 && ScrollPosition < 1860) {
                RemoveActiveClass();
                TeamLi.addClass("active");
            } else if (ScrollPosition > 2950 && ScrollPosition < 2966) {
                RemoveActiveClass();
                ClientsLi.addClass("active");
            } else if (ScrollPosition > 3225 && ScrollPosition < 3240) {
                RemoveActiveClass();
                ContactLi.addClass("active");
            }
        }

    });
    ScrollBtn.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
    HomeLi.click(function() {
        RemoveActiveClass();
        $(this).addClass("active");
        $("html,body").animate({ scrollTop: 70 }, 600);
    });
    ContactLi.click(function() {
        RemoveActiveClass();
        $(this).addClass("active");
        $("html,body").animate({ scrollTop: 3232 }, 600);
    });
    TeamLi.click(function() {
        RemoveActiveClass();
        $(this).addClass("active");
        $("html,body").animate({ scrollTop: 1865 }, 600);
    });
    ClientsLi.click(function() {
        RemoveActiveClass();
        $(this).addClass("active");
        $("html,body").animate({ scrollTop: 2958 }, 600);
    });


});