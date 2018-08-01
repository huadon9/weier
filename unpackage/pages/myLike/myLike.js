$(document).ready(function () {  
    $('.handle-cart').click(function () {  
        if ($(this).hasClass('edit')) {
            editGoods();
        } else {
            saveGoods();
        }
    })
})

function editGoods () {
    $('.sub-footer').removeClass('hide');
    $('.select').removeClass('hide');
    $('.handle-cart').removeClass('edit').text('完成')
}

function saveGoods() {  
    $('.sub-footer').addClass('hide');
    $('.select').addClass('hide');
    $('.handle-cart').addClass('edit').text('编辑')
}