
$('.navbar.navbar-default.page-navigation').next('div').addClass('editPage');
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 600) {
        //clearHeader, not clearheader - caps H
        $(".back-to-top__container ").addClass("visible");
        $(".content_header").addClass("sticky");

    }else{
        $(".back-to-top__container ").removeClass("visible");
         $(".content_header").removeClass("sticky");

    }
}); //missing );





$('.back-to-top').click(function() {
    $('html,body').animate({scrollTop: $(".bg_top").offset().top},3000);

});


$('#cntact').click(function() {

     $('html,body').animate({scrollTop: ($(".uk_titel h6").offset().top - 200)}, 500);

});

$('#contactBtn').click(function() {

     $('html,body').animate({scrollTop: ($(".c_contact_titel").offset().top - 200)}, 500);

});

$('#unserKonzept').click(function() {

     $('html,body').animate({scrollTop: ($(".uk_titel h6").offset().top - 200)}, 500);

});




$(".c_function .tumb").click(function (e){

  /*console.log('test');
  var thisClassName = $(this).attr('class');

     thisClassName = thisClassName.replace(/\b(tumb|active)\b/g, '').trim();

    var otherClassName = $(this).parents('.c_function').find('.fx2').find('.'+thisClassName);

    console.log(otherClassName+"zweite");*/

    var thisClassName = $(this).attr('class').split(' ').find(className => className !== 'tumb' && className !== 'active');


  switch(thisClassName) {

        case 'beihilfe':
            //$(".c_function .fx1 .tumb").removeClass('active');
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            //$(".c_function .fx2 .dec").removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element-100).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;

        case 'agil':
            //$(".c_function .fx1 .tumb").removeClass('active');
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            //$(".c_function .fx2 .dec").removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;

        case 'profil':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;

        case 'tarifePlus':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;


        case 'indTarifkombi':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;



        case 'gesundheitsservices':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;


        case 'kundenportal':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;


        case 'app':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
               // $('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;


        case 'teleClinic':
            $(this).parents('.c_function').find('.tumb').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.c_function').find('.dec').removeClass('active');
            if (thisClassName) {
                var fx2Element = $(this).parents('.c_function').find('.fx2').find('.' + thisClassName);

                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }
                //$('html,body').animate({scrollTop: $(fx2Element).offset().top},500);
                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }

            e.stopPropagation();

        break;

      default:
        // code block
    }


});






$(".c_function2 .tumb").click(function (e){

  /*console.log('test');
  var thisClassName = $(this).attr('class');

     thisClassName = thisClassName.replace(/\b(tumb|active)\b/g, '').trim();

    var otherClassName = $(this).parents('.c_function').find('.fx2').find('.'+thisClassName);

    console.log(otherClassName+"zweite");*/

    var thisClassName = $(this).attr('class').split(' ').find(className => className !== 'tumb' && className !== 'active');


  switch(thisClassName) {

        case 'beihilfe':
            $('.c_function.group1').find('.tumb').removeClass('active');
            $('.c_function.group1').find('.dec').removeClass('active');
            $('.c_function.group1').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group1').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;

        case 'agil':
            $('.c_function.group1').find('.tumb').removeClass('active');
            $('.c_function.group1').find('.dec').removeClass('active');
            $('.c_function.group1').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group1').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;

        case 'profil':
            $('.c_function.group1').find('.tumb').removeClass('active');
            $('.c_function.group1').find('.dec').removeClass('active');
            $('.c_function.group1').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group1').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;

        case 'tarifePlus':
            $('.c_function.group2').find('.tumb').removeClass('active');
            $('.c_function.group2').find('.dec').removeClass('active');
            $('.c_function.group2').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group2').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;


        case 'indTarifkombi':
            $('.c_function.group2').find('.tumb').removeClass('active');
            $('.c_function.group2').find('.dec').removeClass('active');
            $('.c_function.group2').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group2').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;



        case 'gesundheitsservices':
            $('.c_function.group3').find('.tumb').removeClass('active');
            $('.c_function.group3').find('.dec').removeClass('active');
            $('.c_function.group3').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group3').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;


        case 'kundenportal':
            $('.c_function.group3').find('.tumb').removeClass('active');
            $('.c_function.group3').find('.dec').removeClass('active');
            $('.c_function.group3').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group3').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;


        case 'teleClinic':
            $('.c_function.group3').find('.tumb').removeClass('active');
            $('.c_function.group3').find('.dec').removeClass('active');
            $('.c_function.group3').find('.' + thisClassName).addClass('active');
            if (thisClassName) {
                var fx2Element = $('.c_function.group3').find('.fx2').find('.' + thisClassName);
                if (fx2Element.length > 0) {
                    fx2Element.addClass('active');
                }

                $('html,body').animate({scrollTop: ($(fx2Element).offset().top - 100)}, 500);
            }
            e.stopPropagation();

        break;

      default:
        // code block
    }


});



/*
$('.back-to-top__container a').click(function(e) {
    window.open("https://www.makler-gesundheit.de/kontakt","_blank");
  //$(this).parent().find('input[type="radio"]').trigger('click');
  e.stopPropagation();
});
*/

$('#moreInfo p').click(function(e) {
    $(this).parent('#moreInfo').addClass('hideMe');
    $('.closeMe').removeClass('hideMe');
    //consele.log('1');
    $(this).parents('.c_lu').find(".lu_module").addClass('showMore');
  e.stopPropagation();
});
$('.top_header.c_image_bg .str').click(function() {
    $('html,body').animate({scrollTop: $(".c_bl_top").offset().top},2000);

});
/*
$('.checkOut').click(function() {
    $('html,body').animate({scrollTop: $("#checkIn").offset().top},2000);

});*/

$('.closeMe').click(function(e) {
    $(this).addClass('hideMe');
    $('.moreInfo').removeClass('hideMe');
    //consele.log('1');
    $(this).parents('.c_lu').find(".lu_module").removeClass('showMore');
  e.stopPropagation();
});

$('#mkl').click(function(e) {
    window.open("https://online.ruv.de/makler/vertriebsinfos/themenansprache/gesundheit","_blank");
  //$(this).parent().find('input[type="radio"]').trigger('click');
  e.stopPropagation();
});









$('.uk_contents .u1 .btn').click(function(e) {

    $('html,body').animate({scrollTop: $("#gesundheit").offset().top},250);
    e.stopPropagation();

});

$('.uk_contents .u2 .btn').click(function(e) {

    $('html,body').animate({scrollTop: $("#luckenlos").offset().top},600);
    e.stopPropagation();

});

$('.uk_contents .u3 .btn').click(function(e) {

    $('html,body').animate({scrollTop: $("#manage").offset().top},800);
    e.stopPropagation();

});



$('#msc').click(function(e) {

    $('html,body').animate({scrollTop: ($("#module_S6YhhTu").offset().top - 100)},800);
     //$('html,body').animate({scrollTop: ($("module_S6YhhTu").offset().top - 100)}, 500);
    e.stopPropagation();

});

$('.c_register .btn').click(function(e) {
 console.log('ggggg');
    $('html,body').animate({scrollTop: ($("#module_S6YhhTu").offset().top - 100)},800);
     //$('html,body').animate({scrollTop: ($("module_S6YhhTu").offset().top - 100)}, 500);
    e.stopPropagation();

});





function setEqualHeights() {

    // Höhen für die drei nebeneinander stehenden Elemente
    var height1 = $('.uk_contents .u1 .textarea').outerHeight();
    var height2 = $('.uk_contents .u2 .textarea').outerHeight();
    var height3 = $('.uk_contents .u3 .textarea').outerHeight();
    var maxHeight1 = Math.max(height1, height2, height3);

    // Höhen für die zwei nebeneinander stehenden Elemente
    var height4 = $('.c_vu1 .m1 .text').outerHeight();
    var height5 = $('.c_vu1 .m2 .text').outerHeight();

    var height6 = $('.c_vu2 .m1 .text').outerHeight();
    var height7 = $('.c_vu2 .m2 .text').outerHeight();


  var maxHeight2 = Math.max(height4, height5);
  var maxHeight3 = Math.max(height6, height7);

    // Setze die berechneten Höhen
    $(".uk_contents .textarea").css('min-height', maxHeight1);
    $(".c_vu1 .text").css('min-height', maxHeight2);
    $(".c_vu2 .text").css('min-height', maxHeight3);
   // $('.lsa_3.lsa_n2 .singleModule .text').css('min-height', maxHeight2);
}

function handleResize() {
    var w = $(window).width();
    var w2 = $(window).width();
    if (w > 1280) {
        setTimeout(setEqualHeights, 0);
    } else {
        // Bei kleineren Bildschirmen min-height zurücksetzen
        $(".uk_contents .textarea").css('min-height', 'auto');
        $(".c_vu1 .text").css('min-height', 'auto');
        $(".c_vu2 .text").css('min-height', 'auto');
    }
}

// Initialer Aufruf
handleResize();

// Resize-Event
$(window).resize(handleResize);




function setEqualHeights2() {
  var height1 = $('.c_contact_m2 .box1').outerHeight();
  var height2 = $('.c_contact_m2 .box2').outerHeight();
  var maxElm = Math.max(height1, height2);
  $('.c_contact_m2 .box').css('min-height',maxElm);
}
function handleResize2() {
    var w = $(window).width();
    if (w > 940) {
        setTimeout(setEqualHeights2, 0);
    } else {
        // Bei kleineren Bildschirmen min-height zurücksetzen
      $('.c_contact_m2 .box').css('min-height', 'auto');
      $('.c_contact_m2 .box').css('min-height', 'auto');

    }
}

// Initialer Aufruf
handleResize2();

// Resize-Event
$(window).resize(handleResize2);
