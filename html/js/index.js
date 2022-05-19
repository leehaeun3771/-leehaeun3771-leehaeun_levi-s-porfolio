$(function(){
    var i = 0;
    var mnimgGr = $('.mainWrap .imageGroup');
    var mainBtn = $('.mainWrap>main>div.btns>div.btn');
    var mainpaging =  $('main>div.imageView>ul.paging>li');
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var onOff = false;


    mainpaging.eq(0).addClass('show');


    // 메인 오른쪽 버튼
    mainBtn.last().click(function(){
        if(!onOff){
            i--;
            i=(i+5)%5;
            onOff = true;
        }

        mnimgGr.find('.img').css({width:'0'});
        mnimgGr.find('.img').eq(i).css({width:'calc(100% / 5)'});
        mainpaging.removeClass('show');
        mainpaging.eq(i).addClass('show');       
    });

    mnimgGr.find('.img').on(events, function(){
        onOff = false;
    });


    //메인 왼쪽 버튼
    mainBtn.first().click(function(){
        if(!onOff){
            i++;
            i=i%5;
            onOff = true;
        }

        mnimgGr.find('.img').css({width:'0'});
        mnimgGr.find('.img').eq(i).css({width:'calc(100% / 5)'});
        mainpaging.removeClass('show');
        mainpaging.eq(i).addClass('show');
    });


    //페이징버튼
    mainpaging.click(function(){
                
        mainpaging.removeClass('show');
        $(this).addClass('show');
        
        var ind = $(this).index();
        mnimgGr.find('.img').css({width:'0%'});
        mnimgGr.find('.img').eq(ind).css({width:'calc(100% / 5)'});
        i = ind;
    });



    // 컨텐츠1
    var j = 0;
    var stop = $('div.content.cnt01 section div.artView article .image');
    var cntli = $('div.content.cnt01 ul.paging li');
    var conimg = $('div.content.cnt01 section .group');
    var contxt = $('div.content.cnt01 section .texts');
    

    // 초기설정
    conimg.find('article:nth-child(n+17)').prependTo(conimg);
    conimg.css({marginLeft : '-100%'});

    // 첫번째 버튼

    function leftSlide(){
            conimg.stop().animate({
                marginLeft : '-200%'
            },1800, function(){
                conimg.find('article:nth-child(-n+4)').appendTo(conimg);
                conimg.css({
                    marginLeft : '-100%'
                });
            });
        };


    //컨텐츠1 모바일버전
    var win = $(window).width();
    if(win <= 420){
        // conimg.find('article:nth-child(n+19)').prependTo(conimg);
        conimg.css({marginLeft : '-200%'});

        function leftSlide(){
            conimg.stop().animate({
                marginLeft : '-300%'
            },1800, function(){
                conimg.find('article:nth-child(-n+2)').appendTo(conimg);
                conimg.css({
                    marginLeft : '-200%'
                });
            });
        };

    }else{

        
    }


    // //  컨텐츠1 왼쪽버튼
    // function leftSlide(){

    //     if(!onOff){
    //         j++;
    //         j=j%5;
    //         onOff == true;
    //     }

    //     conimg.find('.artGroup').css({display : 'none'});
    //     conimg.find('.artGroup').eq(j).css({display : 'flex'});

    //     // conimg.stop().animate({
    //     //     marginLeft : j * -100 +'%'
    //     // },1500);

    // };
        
    //텍스트 온오프
    stop.click(function(){
        var inded = $(this).attr('data-num');
        contxt.css('display', 'none');
        contxt.eq(inded).css('display', 'block');
        stop.css('opacity', 0.2);
        $(this).css('opacity', 1);
    });
    

    var auto = setInterval(leftSlide, 4000);
    
    // 자동슬라이드(타임)
    stop.stop().click(function(){
        clearInterval(auto);

        $(this).click(function(){
            auto = setInterval(leftSlide, 4000);
            stop.css('opacity', 1);
        });
        
    });

    // 상단 즐겨찾기 아이콘 온/오프
    var conIcon = $('div.content.cnt01 section div.artView article div.btn');
    conIcon.click(function(){
        $(this).css({
            'display' : 'none'
        });
        $(this).next().css({
            'display' : 'block',
            'color' : '#fc0',
            'opacity' : 1
        })
    });
    conIcon.even().click(function(){
        $(this).css({
            'display' : 'none'
        });
        $(this).prepend().css({
            'display' : 'block'
        })
    });




        // 컨텐츠2

        //페이징 넘길때 애니메이션 효과 추후에 추가할 것.
        var k = 0;
        var conbtn2 = $('.content.cnt02 section div.btns div.btn');
        var conGroup2 = $('.content.cnt02 section .artView .group');
        var conpaing2 = $('.content.cnt02 ul.paging li');
    
        // 컨텐츠2 오른쪽 버튼
        conbtn2.last().click(function(){
            if(!onOff){
                k--;
                k=(k+5)%5;
                onOff == true;
            }

            conGroup2.find('.artGroup').css({display:'none'});                              
            conGroup2.find('.artGroup').eq(k).css({display:'flex'});
            conpaing2.removeClass('show');
            conpaing2.removeClass('show');
            conpaing2.eq(k).addClass('show');
        });

        conGroup2.find('.artGroup').on(events, function(){
            onOff == false;
        });

        //컨텐즈2 왼쪽 버튼
        conbtn2.first().click(function(){
            if(!onOff){
                k++;
                k=k%5;
                onOff == true;
            }

            conGroup2.find('.artGroup').css({display:'none'});                      
            conGroup2.find('.artGroup').eq(k).css({display:'flex'});         
            conpaing2.removeClass('show');
            conpaing2.eq(k).addClass('show');
        });


        //페이징버튼
        conpaing2.eq(0).addClass('show');
        conpaing2.click(function(){
                    
            conpaing2.removeClass('show');
            $(this).addClass('show');
            
            var indcon2 = $(this).index();
            conGroup2.find('.artGroup').css({width:'0%'});
            conGroup2.find('.artGroup').eq(indcon2).css({width:'calc(100% / 5)'});

        });


        // 탑버튼
        $('.Topbtns .top').click(function(){
            $('html,body').stop().animate({scrollTop : 0},500);
        });






});