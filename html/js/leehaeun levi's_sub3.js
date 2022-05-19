$(function(){
    cntHdGr = $('.content.cnt02 header .txtGroup');
    cntGr = $('.content.cnt02 section .artGroup');
    button = $('.content.cnt02 header .btns .btn');
    paging = $('.content.cnt02 section ul.paging');
    var i = 0;

    paging.find('li').eq(0).addClass('show');
    
    //왼쪽 버튼
    button.eq(0).click(function(){
        i++;
        if(i >= 2){
            i = 2;
        }
        console.log(i);
        cntGr.css({
            marginLeft  : i * -100 + '%'
        });
        cntHdGr.css({
            marginLeft  : i * -100 + '%'
        });


        //페이징
        paging.find('li').removeClass('show');
        paging.find('li').eq(i).addClass('show');
    });


    //오른쪽버튼
    button.eq(1).click(function(){
        i--;
        if(i <= 0){
            i = 0;
        }
        cntGr.css({
            marginLeft  : i * -100 + '%'
        });
        cntHdGr.css({
            marginLeft  : i * -100 + '%'
        });


        //페이징
        paging.find('li').removeClass('show');
        paging.find('li').eq(i).addClass('show');
    });


    // 탑버튼
    $('.Topbtns .top').click(function(){
        $('html,body').stop().animate({scrollTop : 0},500);
    });


});