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