$(function(){
    cntGr = $('.content.cnt01 section .artView');
    cntGrp = $('.content.cnt01 section .artView .artGroup');
    cntTab = $('.content.cnt01 header ul.nav');

    var i = 0; 
    i++;

    //컨텐츠 1 이미지 넘기기
    cntTab.find('li').eq(0).addClass('show1');
    
    cntTab.find('li').mouseenter(function(){
        
        cntTab.find('li').removeClass('show1');
        $(this).addClass('show1');

        var ind = $(this).index();
        cntGr.find('.artGroup').css({
            display : 'none',
        })
        cntGr.find('.artGroup').eq(ind).css({
            display : 'flex',
            width : 'calc(100% / 4)',
            
        })
        i = ind;
    });

    //컨텐츠2 카테고리 선택 + / -
    onBtn = $('.content.cnt02 section .artLeft .title .btn');
    contitle = $('.content.cnt02 section .artLeft .aco .title');
    conLif = $('.content.cnt02 section .artLeft .aco .title').eq(1).find('li');
    conLisize = $('.content.cnt02 section .artLeft .aco .title').eq(3).find('li');
    conLit = $('.content.cnt02 section .artLeft .aco .title').eq(5).find('li');
    conright = $('.content.cnt02 section .artRight article .image');

    conright.mouseenter(function(){
        $(this).animate({
            backgroundSize : '110%'
        },400)
    });
    conright.mouseleave(function(){
        $(this).animate({
            backgroundSize : '103%'
        },)
    });
    
    
    contitle.even().click(function(){
        $(this).toggleClass('show');

        conLif.click(function(){
            conLif.removeClass('on1');
            $(this).addClass('on1');
        })
        
        conLisize.click(function(){
            $(this).addClass('on2');
        })
        
        conLit.click(function(){
            conLif.removeClass('on3');
            $(this).addClass('on3');
        })

    });

    // 탑버튼
    $('.Topbtns .top').click(function(){
        $('html,body').stop().animate({scrollTop : 0},500);
    });


});