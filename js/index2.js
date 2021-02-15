$(".article1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:1025,
        settings:{
            arrows:false
        }
    }]
})


// $('.article1 .playstop').on('click', function () {
//     var $ibutton = $(this).find('i')
//     if ($ibutton.hasClass('fa-pause')) {
//         $('.article1 .slide_group').slick('slickPause')
//         $ibutton.removeClass('fa-pause').addClass('fa-play')
//     } else {
//         $('.article1 .slide_group').slick('slickPlay')
//         $ibutton.removeClass('fa-play').addClass('fa-pause')
//     }
// })

var elPlaystop = document.querySelector('.article1 .playstop')
var ibtn = elPlaystop.childNodes

elPlaystop.addEventListener('click', function () {
    if (ibtn[0].classList.contains('fa-pause')) {
        $('.article1 .slide_group').slick('slickPause')
        ibtn[0].classList.remove('fa-pause')
        ibtn[0].classList.add('fa-play')
    } else {
        $('.article1 .slide_group').slick('slickPlay')
        ibtn[0].classList.remove('fa-play')
        ibtn[0].classList.add('fa-pause')
    }
})
$('#header .open').on('click', function () {
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
})

/////////// 여기서 부터 ////////////
// resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize = 1024;    

// 함수선언   모르겠으면 복붙해서 쓰기 위 deviceSize 의 값만 원하는 값으로 바꿔서 
function scrollox(status) {                   //고정
    $('html').css({
        overflowY:status
    })
    var htmlwidth = $('html').width()
    return htmlwidth
}
var swh = scrollox('hidden')
var sws = scrollox('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}                   //전부다 고정


var ww;
// 함수선언
function init(){
     ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {    //고정
        $('html').addClass('pc').removeClass('mobile')   //고정   
        $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
       
    } else if ( ww<=1024 && !$('html').hasClass('mobile') ) {    //고정
        $('html').addClass('mobile').removeClass('pc')   //고정
        $('#header .nav').removeClass('on')
        $('#header .open').removeClass('on')
        $('html').scrollTop(0)

    }
}

// 함수호출 
init()

$(window).on('resize', function(){
    init()
})





$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile')) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')

    }
})
$('.depth1 > li').hover(
    function(){
        if($('html').hasClass('pc')) {
            $(this).addClass('on')
        }
    },
    function(){
        if( $('html').hasClass('pc')) {
            $(this).removeClass('on')
        }
    }
)
// 작은화면 네이브에서 depth2를 클릭했을때 원하는 페이지로 넘어가지않는다면!
$('.depth2 > li').on('click',function(e){
    e.stopPropagation()
})

// 네이브를 위에 고정시키는데 스크롤 이벤트가 50 발생했을때 픽스시키는 방법 
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if(sct >= 50 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
    } else if( sct<50 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')

    }
})