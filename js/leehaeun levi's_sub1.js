$(function(){
    cntGr = $('.content.cnt01 section .artView');
    cntGrp = $('.content.cnt01 section .artView .artGroup');
    cntTab = $('.content.cnt01 header ul.nav');

    var i = 0; 
    i++;

    //컨텐츠 1 이미지 넘기기
    cntTab.find('li').eq(0).addClass('show1');
    cntTab.find('li').click(function(){
        
        cntTab.find('li').removeClass('show1');
        $(this).addClass('show1');

        var ind = $(this).index();
        cntGr.find('.artGroup').css({display : 'none'})
        cntGr.find('.artGroup').eq(ind).css({
            display : 'flex',
            width : 'calc(100% / 4)'
            
        })
        i = ind;
    });

    //컨텐츠2 카테고리 선택 + / -
    onBtn = $('.content.cnt02 section .artLeft .title .btn');
    contitle = $('.content.cnt02 section .artLeft .aco .title');
    conLif = $('.content.cnt02 section .artLeft .aco .title').eq(1).find('li');
    conLisize = $('.content.cnt02 section .artLeft .aco .title').eq(3).find('li');
    conLit = $('.content.cnt02 section .artLeft .aco .title').eq(5).find('li');

    
    contitle.even().click(function(){
        // contitle.even().removeClass('show');
        $(this).toggleClass('show');
        // $(this).find('.btn').eq(1).text('33');
        $(this).find('.btn').eq(1).css({display : 'none'});
        $(this).find('.btn').eq(0).css({display : 'block'});

        $(this).find('.btn').eq(0).click(function(){
            $(this).css({display : 'none'});
            $(this).sibling().css({display : 'block'});
        });


        //클릭했을때 a다. 
        //만약 a를 한번 더 클릭하면 b다.


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



});