$(document).ready(function () {
    $('.reason-text').keyup(function () {
        var text = $(this).val();
        $('.text-count').text(140 - text.length)
    })
    $('.sub').click(function () {
        var number = parseInt($('.goods-number').val());
        if (number < 2) {
            $('.sub').addClass('disable');
            $('.goods-number').val(0);
            return;
        }
        $('.goods-number').val(--number);
    })
    $('.add').click(function () {
        var number = parseInt($('.goods-number').val());
        if (number > -1) {
            $('.sub').removeClass('disable');
        }
        $('.goods-number').val(++number);
    })
});