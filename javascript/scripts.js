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
        const footer = document.querySelector('footer');
        const body = document.querySelector('body');
        const geral = document.documentElement;
        const languageIcon = document.getElementById('language-icon');

        if (currentIcon === 'dark_mode') {
            icon.textContent = 'light_mode';
            header.style = "background-color: #e6e6e6";
            footer.style = "background-color: #e6e6e6";
            body.style = "background-color: #f3f3f3";
            languageIcon.style.border = "black solid";
            geral.style.setProperty('--main-color', 'black');
            geral.style.setProperty('--sec-color', 'seagreen');

        } else {
            icon.textContent = 'dark_mode';
            header.style = "background-color: #070707";
            footer.style = "background-color: #070707";
            body.style = "background-color: #0C0C0C";
            languageIcon.style.border = "white solid";
            geral.style.setProperty('--main-color', 'white');
            geral.style.setProperty('--sec-color', 'springgreen');
        }

        icon.classList.remove('fade-out');
    }, 150);
}

function pageLanguage() {
    const icon = document.getElementById('language-icon');

    const translationsENPT = {
        'About': 'Sobre',
        'Skills': 'Competências',
        'Projects': 'Projetos',
        'Certificates': 'Certificados',
        'Contact': 'Contato'
    };

    const translationsPTEN = {
        'Sobre': 'About',
        'Competências': 'Skills',
        'Projetos': 'Projects',
        'Certificados': 'Certificates',
        'Contato': 'Contact'
    };

    icon.classList.add('fade-out');
    setTimeout(() => {
        if (icon.classList.contains('fi-gb')) {
            icon.classList.remove('fi-gb');
            icon.classList.add('fi-br');

            document.querySelectorAll('nav a').forEach(link => {
                const text = link.textContent.trim();

                if (translationsENPT[text]) {
                    link.textContent = translationsENPT[text];
                }
            });

            document.querySelector('#home h1').innerHTML = 'Olá,<br>Sou <span style="color: var(--sec-color)">Gabriel</span><br><span style="font-family: Inconsolata">Desenvolvedor de Sistemas</span>';
    
            document.querySelector('#about .home-about p').innerHTML = 'Atualmente estou no ensino médio, estudando em uma escola com técnico integrado de Desenvolvimento de Sistemas. ' + 
                                                                        'Quero me focar em aprender sobre desenvolvimento Back-End, principalmente Inteligência Artificial ' +
                                                                        'e Aprendizado de Máquina. Minhas principais habilidades são: Inglês, Python, HTML, CSS, JavaScript, MySQL.';

            document.querySelector('footer p').innerHTML = 'Site feito por <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> para o <a href="https://www.netlify.com" target="_blank">netlify</a>'
        } else {
            icon.classList.remove('fi-br');
            icon.classList.add('fi-gb');

            document.querySelectorAll('nav a').forEach(link => {
                const text = link.textContent.trim();

                if (translationsPTEN[text]) {
                    link.textContent = translationsPTEN[text];
                }
            });

            document.querySelector('#home h1').innerHTML = 'Hi,<br>I\'m <span style="color: var(--sec-color)">Gabriel</span><br><span style="font-family: Inconsolata">System Developer</span>';
    
            document.querySelector('#about .home-about p').innerHTML = 'I am currently studying System Devlopment at a vocational-technical high-school. ' + 
                                                                        'I want to focus on learning about Back-End development, mainly Artificial Intelligence ' +
                                                                        'and Machine Learning. My main skills are: English, Python, HTML, CSS, JavaScript, MySQL.';
            
            document.querySelector('footer p').innerHTML = 'Site made by <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> for <a href="https://www.netlify.com" target="_blank">netlify</a>'
        }

        icon.classList.remove('fade-out');
    }, 150);
}