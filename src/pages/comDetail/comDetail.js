$(document).ready(function () {
    $('.monthSelect').change(function (e) { 
        var date = $(this).val();
        var year = date.split('-')[0];
        var month = date.split('-')[1];
        $('.year').text(year);
        $('.month-text').text(month);
    })
});