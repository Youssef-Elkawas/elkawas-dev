const themeButton = document.querySelector('.theme-btn');
const themeIcon = document.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {

    document.documentElement.classList.add('light-mode');
    themeIcon.textContent = '☀️';

} else {

    themeIcon.textContent = '🌙';

}

themeButton.addEventListener('click', () => {

    document.documentElement.classList.toggle('light-mode');

    if (document.documentElement.classList.contains('light-mode')) {

        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');

    } else {

        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');

    }

});

const externalLinks =
    document.querySelectorAll('.external-link');

const modalOverlay =
    document.querySelector('.modal-overlay');

const modalText =
    document.querySelector('.modal-text');

const continueBtn =
    document.querySelector('.continue-btn');

const cancelBtn =
    document.querySelector('.cancel-btn');

let targetUrl = '';

externalLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        targetUrl = link.href;

        const siteName =
            link.dataset.site;

        modalText.textContent =
            `You are about to visit ${siteName}.`;

        modalOverlay.classList.add('show');

    });

});

continueBtn.addEventListener('click', () => {

    window.open(
        targetUrl,
        '_blank'
    );

    modalOverlay.classList.remove('show');

});

cancelBtn.addEventListener('click', () => {

    modalOverlay.classList.remove('show');

});

modalOverlay.addEventListener('click', (event) => {

    if (event.target === modalOverlay) {

        modalOverlay.classList.remove('show');

    }

});