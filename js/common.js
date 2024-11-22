$(document).ready(function(){//시작
  $("#fullpage").fullpage({
        //메뉴에 대한 옵션 설정 - li에 active가 추가됨
        menu: '.gnb',
        anchors:['menu1', 'menu2', 'menu3', 'menu4','menu5'],
    
        // 네비게이션 보이기
        navigation: true,
        navigationTooltips: ['', '카드신청', '카드이용', '콜라보', '혜택'],
        navigationPosition: 'left',
        showActiveTooltip: true,
    
        //반응형 - 1024 이하에서는 동작 안함
        responsiveWidth: 1024,
    
        //푸터 갔을때 네이게이션 숨기기
        onLeave: function(index, nextIndex, direction){
          if(nextIndex == 7){
            $("#fp-nav").fadeOut(300);
          }else if(nextIndex == 6){
            $("#fp-nav").fadeOut(300);
          }
          else{$("#fp-nav").fadeIn(300);
          }
        }

  });


  //슬라이드

  // 첫 번째 슬라이더에만 autoplay를 설정하여 두 슬라이더가 동일한 타이밍에 전환됩니다.
var box1 = new Swiper(".box1-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2500, // 1000=1초
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
});

var box2 = new Swiper(".box2-swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1000,
});

// 두 슬라이더를 서로 동기화하여, box1의 자동 재생 타이밍에 맞춰 box2도 전환됩니다.
box1.controller.control = box2;
box2.controller.control = box1;







  //collaboration
  $(".collaboration-box > div").eq(0).addClass("active");
  $(".collaboration-box > div").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");

    if($(".t1").hasClass("active") === true) {

      $("#collaboration").addClass("bg1");
      $("#collaboration").removeClass("bg2");
      
      } else {
      
        $("#collaboration").addClass("bg2");
        $("#collaboration").removeClass("bg1");
      }
      

  });

  


});//끝