/*global $, alert, console, window: false*/
/*jslint browser:true */
$(function () {
    'use strict';
    //Adjust Header height
    $('header').css('min-height', $(window).height());
    $(window).resize(function () {
        $('header').css('min-height', $(window).height());
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
        console.log($(this).data('value'));
    });
    
    /*  Script : Change Navigation Active Class on Page Scroll */
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 0 && scrollTop <= 740) {
            $('.navbar-nav li:nth-child(1) a').parent().addClass('active').siblings().removeClass('active');
            console.log("Header");
        } else if (scrollTop > 740 && scrollTop <= 1520) {
            $('.navbar-nav li:nth-child(2) a').parent().addClass('active').siblings().removeClass('active');
            console.log("Articles");
        } else if (scrollTop > 1520 && scrollTop <= 2280) {
            $('.navbar-nav li:nth-child(3) a').parent().addClass('active').siblings().removeClass('active');
            console.log("Albums");
        } else if (scrollTop > 2280 && scrollTop <= 3040) {
            $('.navbar-nav li:nth-child(4) a').parent().addClass('active').siblings().removeClass('active');
            console.log("QuiSommesNous");
        } else {
            $('.navbar-nav li:nth-child(5) a').parent().addClass('active').siblings().removeClass('active');
            console.log("ContactUs");
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
});
