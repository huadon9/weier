var swiper = new Swiper('.swiper-container',{
    loop: true,
    autoplay: 3000,
    pagination : '.swiper-pagination',
});

$(document).ready(function () {
    $('.sub-item').click(function () {  
        $('.sub-item').removeClass('active');
        $(this).addClass('active');   
        $('.we-tabbar').addClass('hide');     
        if($(this).hasClass('goods')) {
            $('.we-content').addClass('hide');
            $('.we-content.goods').removeClass('hide');
            return;
        }
        if($(this).hasClass('detail')) {
            $('.we-content').addClass('hide');
            $('.we-content.detail').removeClass('hide');
            return;
        }
        if($(this).hasClass('comment')) {
            $('.we-content').addClass('hide');
            $('.we-content.comment').removeClass('hide');
            return;
        }
        if($(this).hasClass('true-use')) {
            $('.we-content').addClass('hide');
            $('.we-content.true-use').removeClass('hide');
            return;
        }
        if($(this).hasClass('tabbar')) {
            $('.we-tabbar').removeClass('hide');
            return;
        }
    })

    $('.video').click(function () {  
        $(this).parent().siblings('.videos').removeClass('hide');
    })
});