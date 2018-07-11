$(document).ready(function () {
    var clipboard = new ClipboardJS('.copy', {
        target: function() {
            return document.querySelector('#ship-number');
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });
})