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
    $('select').removeAttr('disabled');
    $('.edit-models').hide();
    $('.save-models').show();
    $('.handle-cart').removeClass('edit').text('完成')
}

function saveGoods() {  
    $('select').attr('disabled', 'disabled');
    $('.edit-models').show();
    $('.save-models').hide();
    $('.handle-cart').addClass('edit').text('编辑商品')
}