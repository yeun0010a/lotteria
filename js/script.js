$(function(){
        // 스크롤 내리면 위로 버튼 보이기
    $(window).scroll(function (){
        if($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        }else{
            $(".btn_top").fadeOut();
        }
    });

    // 버튼 누르면 천천히 올라가기    
    $(".btn_top").on("click",function(){
        $("html, body").stop().animate({
            scrollTop:0
        },400);
    });
    
    // 메뉴
    $("nav>ul>li.grupMenu").mouseenter(function(){
        $(this).children('ul.submenu').stop().slideDown(200);
    });
    $("nav>ul>li.grupMenu").mouseleave(function(){
        $(this).children('.submenu').stop().slideUp(200);
    });


});

