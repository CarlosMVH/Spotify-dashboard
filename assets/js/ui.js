//Pill Slide
function pillBgAnimation() {
    const buttons = document.querySelectorAll('.main-menu__button');
    let activeButton = document.querySelector('.main-menu__button--active');
    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            if (button === activeButton) return;
            activeButton.classList.remove('main-menu__button--active');
            button.classList.add('main-menu__button--active');
            activeButton = button;
        });
    });
}

// Marquee Effect
function applyMarqueeIfOverflow(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        const wrapper =
            el.closest('.content-card__text') ||
            el.closest('.player__title') ||
            el.closest('.player__artist') ||
            el.parentElement;

        if (!wrapper) return;

        const hasOverflow = el.scrollWidth > wrapper.clientWidth;

        if (hasOverflow) {
            el.classList.add('is-marquee');
        } else {
            el.classList.remove('is-marquee');
        }
    });
}

const marqueeSelectors = [
    '.player__title a',
    '.player__artist a',
    '.content-card__title',
    '.content-card__artist'
];

function updateAllMarquees() {
    marqueeSelectors.forEach(selector => applyMarqueeIfOverflow(selector));
}

document.addEventListener('DOMContentLoaded', () => {
    updateAllMarquees();
    updateYear();
    pillBgAnimation();
});

window.addEventListener('resize', () => {
    updateAllMarquees();
});

// Update Year
function updateYear() {
    let currentYear = new Date().getFullYear();
    const footerEl = document.getElementById('year');
    if (!footerEl) return;
    
    footerEl.innerHTML = `&copy; ${currentYear} Tracktify. All rights reserved.`;
}