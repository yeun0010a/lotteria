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

	var $menu = $("ol.menu_menu > li");
	var $box = $("ul.bestmenuList");
	var $moreBtn = $(".menu_more > a");

	var $best = $(".best_menumenu");
	var $burg = $(".burg_menumenu");
	var $dess = $(".dess_menumenu");
	var $chic = $(".chic_menumenu");
	var $drin = $(".drin_menumenu");
	var $icec = $(".icec_menumenu");


	//more버튼 클릭시
	// "moreBtn" 요소에 대한 click 이벤트 핸들러를 등록합니다.
	$moreBtn.on("click", function () {
		$box.children().addClass("on");
    
        $moreBtn.css({"display":"none"})
		return false;
	});

	//menu버튼 클릭시
	$menu.on("click", function () {
		nowidx = $(this).index();

		$(this).addClass("select_menumenu").siblings().removeClass("select_menumenu");

		if (nowidx == 0) {
			manuList1();
			$moreBtn.addClass("on");
		} else if (nowidx == 1) {
			manuList2();

		} else if (nowidx == 2) {
			manuList3();

		} else if (nowidx == 3) {
			manuList4();
		} else if (nowidx == 4) {
			manuList5();
		} else if (nowidx == 5) {
			manuList6();
		} else {
			manuList7();
		}

		return false;
	});

    

	//메뉴1 - 추천
	function manuList1() {

		$(this).addClass("select_menumenu");

		$(".burg,.dess,.chic,.drin,.icec,.more").removeClass("on").addClass("off");
		$(".best").removeClass("off").addClass("on");

        $moreBtn.css({"display":"block"})
	}

	//메뉴2 - 버거
	function manuList2() {
        
		$(this).addClass("select_menumenu");

		$(".burg").removeClass("off").addClass("on");
		$(".dess,.chic,.drin,.icec").removeClass("on").addClass("off");

        $moreBtn.css({"display":"none"})

	}

	//메뉴3 - 디저트
	function manuList3() {
		$(this).addClass("select_menumenu");

		$(".dess").removeClass("off").addClass("on");
		$(".burg,.chic,.drin,.icec").removeClass("on").addClass("off");

        $moreBtn.css({"display":"none"})

	}

	//메뉴4 - 치킨
	function manuList4() {
		$(this).addClass("select_menumenu");

		$(".chic").removeClass("off").addClass("on");
		$(".burg,.dess,.drin,.icec").removeClass("on").addClass("off");

        $moreBtn.css({"display":"none"})

	}
	//메뉴5 - 음료
	function manuList5() {
        $(this).addClass("select_menumenu");

		$(".drin").removeClass("off").addClass("on");
		$(".burg,.dess,.chic,.icec").removeClass("on").addClass("off");

        $moreBtn.css({"display":"none"})

	}
	//메뉴6 - 아이스
	function manuList6() {
        $(this).addClass("select_menumenu");

		$(".icec").removeClass("off").addClass("on");
		$(".burg,.dess,.chic,.drin").removeClass("on").addClass("off");

        $moreBtn.css({"display":"none"})

	}






});