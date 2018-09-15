$('.ctn').click(function(){
    $('.icon')
        .toggleClass('menu')
        .toggleClass('close');

    $('.nav, .ctn2').animate({width: 'toggle'}, 200);
    $('body').toggleClass('scrollLock');
});