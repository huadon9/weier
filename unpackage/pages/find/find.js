$(document).ready(function () {
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

    $('.videos').click(function () {
        $(this).addClass('hide-play');
        $(this).find('.video').removeClass('hide');
    })
})