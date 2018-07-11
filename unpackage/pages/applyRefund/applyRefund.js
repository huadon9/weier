$(document).ready(function () {
   $('.reason-text').keyup(function () {  
       var text = $(this).val();
       $('.text-count').text(140 - text.length)
   })
});