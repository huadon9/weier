var swiper = new Swiper('.swiper-container',{
    loop: true,
    autoplay: 3000,
    pagination : '.swiper-pagination',
});

$(document).ready(function () {
    $('.sub-item').click(function () {  
        $('.sub-item').removeClass('active');
        $(this).addClass('active');       
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
            if ($('.we-tabbar').hasClass('hide')) {
                $('.we-tabbar').removeClass('hide');
            } else {
                $('.we-tabbar').addClass('hide');
            }
        }
    })

    $('.video').click(function () {  
        $(this).parent().siblings('.videos').removeClass('hide');
    })

    $('.see-all').click(function () {
        if ($(this).hasClass('downed')) {
            $(this).removeClass('downed');
            $(this).parent().addClass('ellipsis');
            $(this).find('.ell').text('...');
            $(this).find('.s-text').text('展开');
        } else {
            $(this).addClass('downed');
            $(this).parent().removeClass('ellipsis');
            $(this).find('.ell').text('');
            $(this).find('.s-text').text('收起');
        }
        
    }) 

    $('.goods-standard').click(function () {
        $('.cover-bg').removeClass('hide');
        $('.poper').removeClass('hide');
    })
    $('.cover-bg').click(function () {
        $('.cover-bg').addClass('hide');
        $('.poper').addClass('hide');
    })
    $('.close').click(function () {
        $('.cover-bg').addClass('hide');
        $('.poper').addClass('hide');
    })

    $('.goods-type .item').click(function () {
        $('.goods-type .item').removeClass('selected');
        $(this).addClass('selected');
    })

});