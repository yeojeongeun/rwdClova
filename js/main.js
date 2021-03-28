(function() {
    var nextPosition = 0;           // 다음 scrollTop
    var firstPosition = 0;          // 최초 scrollTop

    $(window).on('scroll', function() {
        // 다음 scrollTop
        nextPosition = $(this).scrollTop();

        // 마우스휠이벤트시 scrollTop 차이
        var scGap = Math.abs(nextPosition - firstPosition);
        
        // ios 최상단 바운스 스크롤시 scrollTop값이 음수일때 실행하지 않음
        // ie scrollTㅐp 차이가 10이상이면 실행
        if(nextPosition >= 0 && scGap >= 10) {
            if(nextPosition > firstPosition) {
                $('#header').addClass('hide');        // 헤더 올라감
            } else {
                $('#header').removeClass('hide');     // 헤더 내려옴
            };
            firstPosition = nextPosition;
        }

        // 메인 슬라이더 하단 섹션으로 넘어갔을시 헤더 색상변경
        if(firstPosition > 454) {
            $('#header').addClass('white');
        } else {
            $('#header').removeClass('white');
        }
    }).trigger('scroll');

    // 메인 ai,special,news섹션 스크롤 이벤트
    if($('.main_ai').length) {
        
        var aiPos = $('.main_ai').offset().top - 1000;
        var specialPos = $('.main_special').offset().top - 700;
        var newsPos = $('.main_news').offset().top - 700;
        
        $(window).on('scroll' , function() {
            var _scrollTop = $(this).scrollTop();
    
            if(_scrollTop >= aiPos) {
                $('.main_ai').addClass('on');
            }
            if(_scrollTop >= specialPos) {
                $('.main_special').addClass('on');
            }
            if(_scrollTop >= newsPos) {
                $('.main_news').addClass('on');
            }
        }).trigger('scroll');
    };
    


    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
        on: {
            slideChange: function () {
              $('#container .main_slider_wrap .main_slider .swiper-slide').addClass('on');
            },
        },
      });

      // 타블렛&모바일 메뉴 여닫기
    $('#header .btn_side').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('#headerWrap .side_menu').toggleClass('on');
    });
    
    $('#headerWrap .btn_close').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('#headerWrap .side_menu').removeClass('on');
    });

    // 메인 뉴스섹션 슬라이더
    var newsSlider = new Swiper('.news_slider', {
        slidesPerView: 3,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1140: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            }
        },
    });

})();