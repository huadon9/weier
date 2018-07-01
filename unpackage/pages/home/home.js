var swiperWidth = 0;
$(document).ready(function () {
    swiperWidth = $('.swiper-container').width();
    var swiper = new Swiper('.swiper-container',{
        loop: false,
        autoplay: true,
        initialSlide: 1,
        // on: {
        //     init: function () {
        //         swiperConfig();
        //     },
        //     slideChangeTransitionEnd: function(){
        //         swiperConfig();
        //     },
        // },
    
    });
})


function swiperConfig () {
    $('.swiper-slide').removeAttr('style');
    $('.swiper-slide').width(swiperWidth);
    $('.swiper-slide-active').width(swiperWidth - 100);
    $('.swiper-slide-active').css('margin', '0 50px');
    $('.swiper-slide-prev').css('transform', 'translateX(35px)');
    $('.swiper-slide-next').css('transform', 'translateX(-35px)');
}