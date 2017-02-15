/*global $, alert, console, window: false*/
/*jslint browser:true */
var page_current = 0;
$(function () {
    'use strict';
    //Adjust Header height
    $('.Accueil').css('min-height', $(window).height());
    $(window).resize(function () {
        $('.Accueil').css('min-height', $(window).height());
    });
    //add active class to the links of navbar
    $('.navbar-nav li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    //Smoth scroll to Section
    
    $('.navbar-nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
//        console.log($(this).data('value'));
    });
    
    /*  Script : Change Navigation Active Class on Page Scroll */
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 0 && scrollTop <= 740) {
            $('.navbar-nav li:nth-child(1) a').parent().addClass('active').siblings().removeClass('active');
//            console.log("Header");
        } else if (scrollTop > 740 && scrollTop <= 1520) {
            $('.navbar-nav li:nth-child(2) a').parent().addClass('active').siblings().removeClass('active');
//            console.log("Articles");
        } else if (scrollTop > 1520 && scrollTop <= 2280) {
            $('.navbar-nav li:nth-child(3) a').parent().addClass('active').siblings().removeClass('active');
//            console.log("Albums");
        } else if (scrollTop > 2280 && scrollTop <= 3040) {
            $('.navbar-nav li:nth-child(4) a').parent().addClass('active').siblings().removeClass('active');
//            console.log("QuiSommesNous");
        } else {
            $('.navbar-nav li:nth-child(5) a').parent().addClass('active').siblings().removeClass('active');
//            console.log("ContactUs");
        }
    });
    $('.Albums').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true,
            tCounter: '%curr% / %total%'
        }
    });
    //Counting caracters of an textarea
    var text_max = $('textarea').attr('maxlength');
    $('#taille').html(text_max + ' / ' + text_max);
    $('#Msg').keyup(function () {
        var text_length = $(this).val().length;
        $('#taille').html(text_length + ' / ' + text_max);
    });
    //Set a direction to the inputs: rtl => if the user enter a caracter arabic | ltr => if the user enter a caracter frensh or english
    $('input').keyup(function () {
        $('input').each(function () {
            var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g,
                val = $(this).val();
            if (isArabic.test($.trim($(this).val()))) {
                $(this).css("direction", "rtl");
//                console.log("yes it's Arabic | val = " + val);
            } else {
                $(this).css("direction", "ltr");
//                console.log("no it's French | val = " + val);
            }
        });
    });
    $('textarea').keyup(function () {
        var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g,
            val = $(this).val();
        if (isArabic.test($.trim($(this).val()))) {
            $(this).css("direction", "rtl");
        } else {
            $(this).css("direction", "ltr");
        }
    });
    $(".thumbnail").slice(0, 3).show();
    $(".btn-moreArticle").on('click', function (e) {
        e.preventDefault();
        $(".thumbnail:hidden").slice(0, 3).slideDown();
        if ($(".thumbnail:hidden").length === 0) {
            $(".btn-moreArticle").fadeOut('slow');
        }
    });
    $(".Share i:nth-child(3)").click(function () {
        if ($(".Share i:nth-child(1)").is(":hidden") && $(".Share i:nth-child(2)").is(":hidden")) {
            $(".Share i:nth-child(1)").fadeIn(1000);
            $(".Share i:nth-child(2)").fadeIn(1000);
        } else {
            $(".Share i:nth-child(1)").fadeOut(1000);
            $(".Share i:nth-child(2)").fadeOut(1000);
        }
    });
//    $(".pagination").customPaginate({
//        itemsToPaginate : ".thumbnail",
//        activeClass : "active-class"
//    });
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});
