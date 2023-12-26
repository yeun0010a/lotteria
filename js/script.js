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



    $("section#menu .menuInner .eachmenu").each(function () {
        // 현재 반복 중인 .movie 요소를 jQuery 객체로 선택합니다.
        var eachmenu = $(this);
         var likeBtn = eachmenu.find(".likeBtn");

    var isLiked = false;

// .heart-icon을 클릭했을 때의 이벤트 처리
likeBtn.click(function () {
  // 현재 .like-count의 텍스트 값을 가져와서 정수로 변환합니다.

  // 만약 이미 좋아요 상태라면
  if (isLiked) {
      // 카운트를 1 감소시키고 아이콘을 변경합니다.
      isLiked = false;
      likeBtn.css("fill", "none");
      likeBtn.css("stroke", "#888");
  } else {
      // 아직 좋아요 상태가 아니라면
      // 카운트를 1 증가시키고 아이콘을 변경합니다.
      isLiked = true;
      likeBtn.css("fill", "#ed1c24");
      likeBtn.css("stroke", "none");
  }
});
     });
});

$(function () {

	var $box = $("ul.bestmenuList");
	var $moreBtn = $(".menu_more");


	//more버튼 클릭시
	// "moreBtn" 요소에 대한 click 이벤트 핸들러를 등록합니다.
	$moreBtn.on("click", function () {
		// 클릭 시 "on" 클래스를 제거합니다.
		$(this).removeClass("on");

		// "box" 요소에 CSS를 적용하여 높이를 1788px로 설정합니다.
		// 그리고 자식 요소들에 대해 "off" 클래스를 제거하고 "on" 클래스를 추가합니다.
		$box.css({
			// "height": "1788px"
		}).children().removeClass("off").addClass("on");
        
        $moreBtn.css({"display":"none"})
		// click 이벤트의 기본 동작을 막기 위해 false를 반환합니다.
		return false;
	});



});