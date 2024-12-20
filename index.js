var menu = document.getElementById('menu');
var navbar = document.getElementById('nav');

menu.addEventListener('change', function () {
    if (menu.checked) {
        navbar.style.display = 'block';
    }
    else {
        navbar.style.display = 'none';
    }
});