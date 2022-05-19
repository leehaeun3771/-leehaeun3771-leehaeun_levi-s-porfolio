$(function(){
    col = $('.content.cnt01 section .texts .txtMid .color .colorimg').find('.image');
    siz = $('.content.cnt01 section .texts .txtMid .size ul').find('li');

    col.eq(0).addClass('show');
    col.click(function(){
        col.removeClass('show');
        $(this).addClass('show');
    });

    siz.click(function(){
        siz.removeClass('show1');
        $(this).addClass('show1');
    });


    // 탑버튼
    $('.Topbtns .top').click(function(){
        $('html,body').stop().animate({scrollTop : 0},500);
    });
    
    
});