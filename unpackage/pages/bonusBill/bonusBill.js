$(document).ready(function () {
    $('.monthSelect').change(function (e) { 
        var date = $(this).val();
        var year = date.split('-')[0];
        var month = date.split('-')[1];
        $('.year-text').text(year);
        $('.month-text').text(month);
    })
    var pulldown = pullUpLoad(function () {
        //上拉的回调 在这里处理异步        
        setTimeout(function () {
            pulldown.notData(); //没有更多数据调用方法
            // pulldown.resetload(); //重置 在异步成功之后并有新数据的时候调用
        }, 2000)        
    });
});