function pageTheme() {
    const icon = document.getElementById('theme-icon');
    icon.classList.add('fade-out');

    setTimeout(() => {
        const currentIcon = icon.textContent.trim();

        const body = document.querySelector('body');
        const geral = document.documentElement;
        const languageIcon = document.getElementById('language-icon');

        if (currentIcon === 'dark_mode') {
            icon.textContent = 'light_mode';
            body.style = "background-color: #f3f3f3";
            languageIcon.style.border = "black solid";
            geral.style.setProperty('--main-color', 'black');
            geral.style.setProperty('--sec-color', 'seagreen');
            geral.style.setProperty('--bg-color', '#E2E2E2');

        } else {
            icon.textContent = 'dark_mode';
            body.style = "background-color: #0C0C0C";
            languageIcon.style.border = "white solid";
            geral.style.setProperty('--main-color', 'white');
            geral.style.setProperty('--sec-color', 'springgreen');
            geral.style.setProperty('--bg-color', '#090909');
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
            
            // HOME
            document.querySelector('#home h1').innerHTML = 'Olá,<br>Sou <span style="color: var(--sec-color)">Gabriel</span><br><span style="font-family: Inconsolata">Desenvolvedor de Sistemas</span>';

            // ABOUT
            document.querySelector('#about .title h1').innerHTML = 'Sobre Mim';
            document.querySelector('#about .about-text p').innerHTML = 'Atualmente estou no ensino médio, estudando em uma escola com técnico integrado de Desenvolvimento de Sistemas. Quero me focar em aprender sobre desenvolvimento Back-End: principalmente Inteligência Artificial e Aprendizado de Máquina. Eu adoro passar o tempo me desafiando a programar novos projetos, e sou capaz de me adaptar a novos desafios e projetos. Minhas principais habilidades são: Inglês, Python, HTML, CSS, JavaScript, MySQL.';

            // SKILLS
            document.querySelector('#skills .title h1').innerHTML = 'Competências';

            document.querySelector('#skills .sub-title-language').innerHTML = '<h1>Línguas Faladas</h1>';
            document.querySelector('#skills .sub-title-advanced').innerHTML = '<h1>Habilidades Avançadas</h1>';
            document.querySelector('#skills .sub-title-intermediate').innerHTML = '<h1>Habilidades Intermediárias</h1>';
            document.querySelector('#skills .sub-title-beginner').innerHTML = '<h1>Habilidades Básicas</h1>';

            document.querySelector('#skills .skill-card-language-1').innerHTML = '<i class="material-symbols-outlined">translate</i><h2><b>Inglês</b></h2>';
            document.querySelector('#skills .skill-card-language-2').innerHTML = '<i class="material-symbols-outlined">translate</i><h2><b>Português</b></h2>';

            // PROJECTS
            document.querySelector('#projects .title h1').innerHTML = 'Projetos';

            // CERTIFICATES
            document.querySelector('#certificates .title h1').innerHTML = 'Premiações';

            // CONTACT
            document.querySelector('#contact .title h1').innerHTML = 'Me Contate';

            // FOOTER
            document.querySelector('footer p').innerHTML = 'Site feito por <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> para o <a href="https://www.netlify.com" target="_blank">netlify</a>';
        } else {
            icon.classList.remove('fi-br');
            icon.classList.add('fi-gb');

            document.querySelectorAll('nav a').forEach(link => {
                const text = link.textContent.trim();

                if (translationsPTEN[text]) {
                    link.textContent = translationsPTEN[text];
                }
            });

            // HOME
            document.querySelector('#home h1').innerHTML = 'Hi,<br>I\'m <span style="color: var(--sec-color)">Gabriel</span><br><span style="font-family: Inconsolata">System Developer</span>';

            // ABOUT
            document.querySelector('#about .title h1').innerHTML = 'About Me';
            document.querySelector('#about .about-text p').innerHTML = 'I am currently studying System Devlopment at a vocational-technical high-school. I want to focus on learning about Back-End development, mainly Artificial Intelligence and Machine Learning. I love spending time challenging myself with coding projects, and I\'m capable of adapting to new challenges and projects. My main skills are: English, Python, HTML, CSS, JavaScript, MySQL.';

            // SKILLS
            document.querySelector('#skills .title h1').innerHTML = 'My Skills';

            document.querySelector('#skills .sub-title-language').innerHTML = '<h1>Spoken Languages</h1>';
            document.querySelector('#skills .sub-title-advanced').innerHTML = '<h1>Advanced Skills</h1>';
            document.querySelector('#skills .sub-title-intermediate').innerHTML = '<h1>Intermediate Skills</h1>';
            document.querySelector('#skills .sub-title-beginner').innerHTML = '<h1>Beginner Skills</h1>';

            document.querySelector('#skills .skill-card-language-1').innerHTML = '<i class="material-symbols-outlined">translate</i><h2><b>English</b></h2>';
            document.querySelector('#skills .skill-card-language-2').innerHTML = '<i class="material-symbols-outlined">translate</i><h2><b>Portuguese</b></h2>';

            // PROJECTS
            document.querySelector('#projects .title h1').innerHTML = 'My Projects';

            // CERTIFICATES
            document.querySelector('#certificates .title h1').innerHTML = 'My Awardings';

            // CONTACT
            document.querySelector('#contact .title h1').innerHTML = 'Contact Me';

            // FOOTER
            document.querySelector('footer p').innerHTML = 'Site made by <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> for <a href="https://www.netlify.com" target="_blank">netlify</a>';
        }

        icon.classList.remove('fade-out');
    }, 150);
}