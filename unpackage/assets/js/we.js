// 公共的方法

//兼容移动端:active失效问题
document.body.addEventListener('touchstart',function(){});

//搜索框清除内容
$(document).ready(function () {
    $('.s-input').focus(function () {  
        $('.s-clear').removeClass('hide');
    })
    $('.s-input').blur(function () {  
        setTimeout(function () { 
            $('.s-clear').addClass('hide');
        })        
    })
    $('.s-clear').click(function () { 
        $('.s-clear').addClass('hide');
        $('.s-input').focus().val('');        
    })

});

//上拉加载更多
function pullUpLoad (callback) {
    var t;
    $(window).scroll(function (e) {
        var scTop = $(window).scrollTop();
        var bodyHeight = $(document).height();
        var windowHeight = $(window).height();
        clearTimeout(t);
        if (scTop + windowHeight >= bodyHeight) {
            t = setTimeout(function () {
                $('.pull-load').hide();
                $('.pull-up-loading').show();
                if (callback) {
                    callback();
                }
            }, 500)
        }
    })
    this.notData =  function () {
        $('.pull-load').hide();
        $('.pull-up-notdata').show();
    }
    this.resetload = function () {
        $('.pull-load').hide();
        $('.pull-up-title').show();
    }
    return this;
}