/* os códigos a seguir foram feitos com ajuda da internet */

// Função para adicionar e remover a classe de animação quando o elemento entra na tela
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove a classe que mantém o elemento oculto
            entry.target.classList.remove('hidden');
            // Reinicia a animação removendo e adicionando a classe
            entry.target.classList.remove('animate-appear');
            void entry.target.offsetWidth; // Força o reflow
            entry.target.classList.add('animate-appear');
        } else {
            // Adiciona de volta a classe para esconder o elemento quando sai da tela
            entry.target.classList.add('hidden');
        }
    });
}

// Configuração do Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.01 // Define o quanto do elemento precisa estar visível (10%)
});

// Seleciona os elementos que você deseja animar usando um seletor combinado
const elementsToAnimate = document.querySelectorAll('nav, h1, p, i, h2, img, h3, input, textarea, button');

// Adiciona cada elemento ao observer
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

/* os códigos anteriores foram feitos com ajuda da internet */

function pageTheme() {
    const icon = document.getElementById('theme-icon');
    icon.classList.add('fade-out');

    setTimeout(() => {
        const currentIcon = icon.textContent.trim();

        const geral = document.documentElement;
        const languageIcon = document.getElementById('language-icon');

        if (currentIcon === 'dark_mode') {
            icon.textContent = 'light_mode';
            geral.style.setProperty('--main-color', 'black');
            geral.style.setProperty('--sec-color', 'seagreen');
            geral.style.setProperty('--bg-color', '#E2E2E2');
            geral.style.setProperty('--gradient-bg-color-1', '#f3f3f3');
            geral.style.setProperty('--gradient-bg-color-2', '#e9f8e9');

        } else {
            icon.textContent = 'dark_mode';
            languageIcon.style.border = "white solid";
            geral.style.setProperty('--main-color', 'white');
            geral.style.setProperty('--sec-color', 'springgreen');
            geral.style.setProperty('--bg-color', '#0b0b0b');
            geral.style.setProperty('--gradient-bg-color-1', '#0C0C0C');
            geral.style.setProperty('--gradient-bg-color-2', '#050a07');
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

            document.querySelector('#skills .sub-title-advanced h1').innerHTML = 'Nível Avançado';
            document.querySelector('#skills .sub-title-intermediate h1').innerHTML = 'Nível Intermediário';
            document.querySelector('#skills .sub-title-beginner h1').innerHTML = 'Nível Iniciante';

            document.querySelector('#skills .skill-card-language-1 h2 b').innerHTML = 'Inglês';
            document.querySelector('#skills .skill-card-language-2 h2 b').innerHTML = 'Português';
            document.querySelector('#skills .skill-card-language-3 h2 b').innerHTML = 'Espanhol';

            // PROJECTS
            document.querySelector('#projects .title h1').innerHTML = 'Projetos';

            document.querySelector('#projects #project-card-portfolio #project-title').innerHTML = 'Site de Portifólio';
            document.querySelector('#projects #project-card-portfolio #date').innerHTML = 'Agosto 2024';
            document.querySelector('#projects #project-card-portfolio p').innerHTML = 'Site feito para testar e demonstrar minha competência em HTML, CSS e JavaScript. Incluindo API do reCAPTCHA, host de formulário no web3forms e implementação de site na web através do netlify.';

            document.querySelector('#projects #project-card-quiz #project-title').innerHTML = 'Quiz Simples';
            document.querySelector('#projects #project-card-quiz #date').innerHTML = 'Junho 2024';
            document.querySelector('#projects #project-card-quiz p').innerHTML = 'Quiz feito na escola de ensino médio com técnico integrado - ETEC, para aprender sobre menus e mudança de telas em C#.';

            // CERTIFICATES
            document.querySelector('#certificates .title h1').innerHTML = 'Premiações';

            document.querySelector('#certificates #certificate-card-etec h2').innerHTML = 'Assistente de Desenvolvedor de Sistemas';
            document.querySelector('#certificates #certificate-card-etec p').innerHTML = 'Concedido por ETEC, correspondente a conclusão da 1ª SÉRIE do ensino médio com habilitação profissional de técnico em desenvolvimento de sistemas.';

            document.querySelector('#certificates #certificate-card-python h2').innerHTML = 'Curso de Python';
            document.querySelector('#certificates #certificate-card-python p').innerHTML = 'Concedido por Empowerdata, correspondente a conclusão do curso remoto "Semana do Python na Prática".';
            
            document.querySelector('#certificates #certificate-card-toeic h2').innerHTML = 'Proficiência em Inglês';
            document.querySelector('#certificates #certificate-card-toeic p').innerHTML = 'Concedido por TOEIC, correspondente a pontuação total de 94% no teste "TOEIC Bridge® Listening and Reading Test".';

            document.querySelector('#certificates #certificate-card-cuco h2').innerHTML = 'Selo de Ouro - Aluno Destaque na Escola';
            document.querySelector('#certificates #certificate-card-cuco p').innerHTML = 'Concedido por CUCO, correspondente a pontuação total de 89% na "Competição USP de Conhecimentos e Oportunidades".';

            // CONTACT
            document.querySelector('#contact .title h1').innerHTML = 'Me Contate';

            document.querySelector('#contact #message').placeholder = 'Mensagem';
            document.querySelector('#contact #submit').value = 'Enviar';

            // FOOTER
            document.querySelector('.footer-fixed p').innerHTML = 'Site feito por <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> para o <a href="https://www.netlify.com" target="_blank">netlify</a>';

            document.querySelector('.footer-fixed-relative p').innerHTML = 'Site feito por <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> para o <a href="https://www.netlify.com" target="_blank">netlify</a>';
            document.querySelector('.footer-absolute p').innerHTML = '© 2024 todos os direitos reservados';
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

            document.querySelector('#skills .sub-title-advanced h1').innerHTML = 'Advanced Level';
            document.querySelector('#skills .sub-title-intermediate h1').innerHTML = 'Intermediate Level';
            document.querySelector('#skills .sub-title-beginner h1').innerHTML = 'Beginner Level';

            document.querySelector('#skills .skill-card-language-1 h2 b').innerHTML = 'English';
            document.querySelector('#skills .skill-card-language-2 h2 b').innerHTML = 'Portuguese';
            document.querySelector('#skills .skill-card-language-3 h2 b').innerHTML = 'Spanish';

            // PROJECTS
            document.querySelector('#projects .title h1').innerHTML = 'My Projects';

            document.querySelector('#projects #project-card-portfolio #project-title').innerHTML = 'Portfolio Website';
            document.querySelector('#projects #project-card-portfolio #date').innerHTML = 'August 2024';
            document.querySelector('#projects #project-card-portfolio p').innerHTML = 'Website made to test and showcase my skills in HTML, CSS, and JS. Including reCAPTCHA API, web3forms hosting, and netlify deploy.';

            document.querySelector('#projects #project-card-quiz #project-title').innerHTML = 'Simple Quiz';
            document.querySelector('#projects #project-card-quiz #date').innerHTML = 'June 2024';
            document.querySelector('#projects #project-card-quiz p').innerHTML = 'Quiz made at ETEC vocational-technical high-school to learn about menus and changing screens in C#.';

            // CERTIFICATES
            document.querySelector('#certificates .title h1').innerHTML = 'My Awardings';

            document.querySelector('#certificates #certificate-card-etec h2').innerHTML = 'System Developer Assistant';
            document.querySelector('#certificates #certificate-card-etec p').innerHTML = 'Granted by ETEC, corresponding to the completion of the 1st year of high school with professional qualification in system development vocational-technical training.';

            document.querySelector('#certificates #certificate-card-python h2').innerHTML = 'Python Course';
            document.querySelector('#certificates #certificate-card-python p').innerHTML = 'Granted by Empowerdata, corresponding to the completion of the "Semana do Python na Prática" online course.';
            
            document.querySelector('#certificates #certificate-card-toeic h2').innerHTML = 'English Proficiency';
            document.querySelector('#certificates #certificate-card-toeic p').innerHTML = 'Granted by TOEIC, corresponding to 94% total score in "TOEIC Bridge® Listening and Reading Test".';

            document.querySelector('#certificates #certificate-card-cuco h2').innerHTML = 'Gold Seal of Prominence in School';
            document.querySelector('#certificates #certificate-card-cuco p').innerHTML = 'Granted by CUCO, corresponding to 89% total score in the seventh edition of "USP Knowladge and Oportunity Contest".';

            // CONTACT
            document.querySelector('#contact .title h1').innerHTML = 'Contact Me';

            document.querySelector('#contact #message').placeholder = 'Message';
            document.querySelector('#contact #submit').value = 'Send';

            // FOOTER
            document.querySelector('.footer-fixed p').innerHTML = 'Site made by <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> for <a href="https://www.netlify.com" target="_blank">netlify</a>';

            document.querySelector('.footer-fixed-relative p').innerHTML = 'Site made by <a href="https://linktr.ee/gabrielazanhabalan" target="_blank">nalab</a> for <a href="https://www.netlify.com" target="_blank">netlify</a>';
            document.querySelector('.footer-absolute p').innerHTML = '© 2024 copyright all rights reserved';
        }

        icon.classList.remove('fade-out');
    }, 150);
}

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function mobileMenu() {
    var nav = document.querySelector('nav');

    if (nav.style.display === "inline-block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "inline-block";
    }
  }