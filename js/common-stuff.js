const burger = document.querySelector('.hamburger');
const navPanel = document.querySelector('.navigation-panel');
const header = document.querySelector('header');

function toggleBurger() {
    burger.classList.toggle('is-active');
    navPanel.classList.toggle('is-visible');
}

window.onscroll = function(e) {
    e.stopPropagation();
    if (window.scrollY > 100 - 94) {
        if (!header.classList.contains('altered')) {
            header.classList.add('altered');
        }
    } else {
        header.classList.remove('altered');
    }
};
