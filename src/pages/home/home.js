

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    watchSlidesProgress: true,
    initialSlide: 1,
    autoplay: 3000,
    // onProgress: function (swiper) {
    //     var index = swiper.activeIndex;
    //     for (var i = 0; i < swiper.slides.length; i++) {
    //         var slide = swiper.slides[i];
    //         var progress = slide.progress;
    //         scale = 1 - Math.min(Math.abs(progress * 0.2), 1);

    //         es = slide.style;
    //         es.opacity = 1 - Math.min(Math.abs(progress / 2), 1);
    //         es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0px,0,' + (-Math.abs(progress * 150)) + 'px)';
    //     }
    // },

    onSetTransition: function (swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            es = swiper.slides[i].style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }

    }
});

$(document).ready(function () {
    var pulldown = pullUpLoad(function () {
        //上拉的回调 在这里处理异步        
        setTimeout(function () {
            pulldown.notData(); //没有更多数据调用方法
            // pulldown.resetload(); //重置 在异步成功之后并有新数据的时候调用
        }, 2000)        
    });
})

