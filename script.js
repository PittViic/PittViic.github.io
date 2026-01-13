/* --- Menu Responsivo --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --- Scroll Sections Active Link & Sticky Header --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Fecha o menu ao clicar em um link (útil no mobile) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* --- Scroll Reveal (Animações ao rolar) --- */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* --- Typed JS Logic (Texto digitado) --- */
let typed;

function startTyped(stringsArray) {
    // Destrói instância anterior se existir para evitar bugs de sobreposição
    if (typed) typed.destroy();

    typed = new Typed('.multiple-text', {
        strings: stringsArray,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/* --- Language Switcher Logic (ATUALIZADO PARA O BOTÃO FLUTUANTE) --- */
function updateLanguage(lang) {
    // 1. Atualiza textos estáticos buscando pelo atributo data-i18n
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Verifica se existe a tradução para evitar erros
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 2. Atualiza o Typed.js (o texto animado "Eu sou...")
    if (translations[lang] && translations[lang].typed_strings) {
        startTyped(translations[lang].typed_strings);
    }

    // 3. Salvar preferência no navegador do usuário
    localStorage.setItem('selectedLanguage', lang);
}

// Inicialização:
// Verifica se já tem idioma salvo no localStorage, senão usa 'pt' como padrão
const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
updateLanguage(savedLang);

/* --- CONSOLE SIGNATURE --- */
const styleTitle = [
  'font-size: 20px',
  'font-family: monospace',
  'font-weight: bold',
  'color: #38bdf8',
  'text-shadow: 0 0 10px #38bdf8',
].join(';');

const styleBody = [
  'font-size: 14px',
  'font-family: monospace',
  'color: #e2e8f0',
].join(';');

console.log('%c Olá! Procurando bugs ou desenvolvedores? ', styleTitle);
console.log('%c Se você curtiu o que viu, vamos conversar! Entre em contato pelo formulário ou LinkedIn.', styleBody);
console.log('%c Developed by Pedro Victor', 'color: #38bdf8; font-style: italic;');