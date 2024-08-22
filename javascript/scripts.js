function scrollToSection(event, sectionId) {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function pageTheme() {
    const icon = document.getElementById('theme-icon');
    icon.classList.add('fade-out');

    setTimeout(() => {
        const currentIcon = icon.textContent.trim();

        const header = document.querySelector('header');
        const body = document.querySelector('body');
        const geral = document.documentElement;

        if (currentIcon === 'dark_mode') {
            icon.textContent = 'light_mode';
            header.style = "background-color: #e6e6e6"
            body.style = "background-color: #f3f3f3"
            geral.style.setProperty('--main-color', 'black')
            geral.style.setProperty('--sec-color', 'mediumseagreen')

        } else {
            icon.textContent = 'dark_mode';
            header.style = "background-color: #070707"
            body.style = "background-color: #0C0C0C"
            geral.style.setProperty('--main-color', 'white')
            geral.style.setProperty('--sec-color', 'springgreen')
        }

        icon.classList.remove('fade-out');
    }, 100);
}