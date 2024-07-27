document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.multibutton__button');
    var menu = document.querySelector('.multibutton');

    button.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
