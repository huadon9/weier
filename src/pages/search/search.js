$(document).ready(function () {
    var pulldown = pullUpLoad(function () {
        //上拉的回调 在这里处理异步        
        setTimeout(function () {
            pulldown.notData(); //没有更多数据调用方法
            // pulldown.resetload(); //重置 在异步成功之后并有新数据的时候调用
        }, 2000)        
    });

    $('.show-type').click(function () {
        if ($(this).hasClass('list')) {
            $(this).removeClass('list').addClass('block');
            $('.me-list').addClass('block-show');
        } else {
            $(this).removeClass('block').addClass('list');
            $('.me-list').removeClass('block-show');
        }
    })

    $('.choice-goods-btn').click(function () {
        var h = $(window).height();
        var ph = $('.poper').height();
        $('.poper').css('bottom', h - 142 - ph + 'px');
        $('.cover-bg').removeClass('hide');
        $('.poper').removeClass('hide');
    })

    $('.cover-bg').click(function () {
        hidePop();
    })

    $('.s-button').click(function () {
        $('.hot-search').addClass('hide')
    })
})

function hidePop () {
    $('.cover-bg').addClass('hide');
    $('.poper').css('bottom', '-100%');
}