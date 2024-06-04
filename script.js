// script.js

let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');
const nextSectionBtn = document.querySelector('.next-section');
const logo = document.querySelector('.logo');
const header = document.querySelector('header');

function nextSection() {
    const sections = document.querySelectorAll('section');
    let currentIndex = -1;

    // Find the currently visible section
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    // If the current section is the last one, do nothing
    if (currentIndex === sections.length - 1) return;

    // Scroll to the next section
    const nextSection = sections[currentIndex + 1];
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.next-section').addEventListener('click', nextSection);



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

nextSectionBtn.addEventListener('click', nextSection);

window.addEventListener('scroll', () => {
    let sectionPositions = [];
    sections.forEach(section => sectionPositions.push(section.offsetTop));
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i] - window.innerHeight / 2 && scrollPosition < sectionPositions[i] + window.innerHeight / 2) {
            currentSectionIndex = i;
            break;
        }
    }

    if (scrollPosition > 100) {
        header.classList.add('show');
    } else {
        header.classList.remove('show');
    }
});

logo.addEventListener('click', scrollToTop);

document.addEventListener('DOMContentLoaded', function () {
    var nextSectionButton = document.querySelector('.next-section');
    var contactSection = document.getElementById('contactos');

    // Verifica se a seção de contato é a última
    function isLastSectionVisible() {
        var contactSectionRect = contactSection.getBoundingClientRect();
        return contactSectionRect.top < window.innerHeight && contactSectionRect.bottom > 0;
    }

    // Verifica se a seta deve ser exibida ou ocultada
    function updateNextSectionButton() {
        if (isLastSectionVisible()) {
            nextSectionButton.style.display = 'none'; // Oculta a seta
        } else {
            nextSectionButton.style.display = 'flex'; // Exibe a seta
        }
    }

    // Atualiza o estado da seta quando a página é carregada e redimensionada
    window.addEventListener('load', updateNextSectionButton);
    window.addEventListener('resize', updateNextSectionButton);
    window.addEventListener('scroll', updateNextSectionButton);
});


//Nome animação

window.addEventListener('scroll', () => {
    let sectionPositions = [];
    sections.forEach(section => sectionPositions.push(section.offsetTop));
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i] - window.innerHeight / 2 && scrollPosition < sectionPositions[i] + window.innerHeight / 2) {
            currentSectionIndex = i;
            break;
        }
    }

    if (scrollPosition > 100) {
        header.classList.add('show');
        // Adiciona a classe hide ao <h1> quando houver scroll
        document.querySelector('h1').classList.add('hide');
    } else {
        header.classList.remove('show');
        // Remove a classe hide do <h1> quando o usuário rolar para cima
        document.querySelector('h1').classList.remove('hide');
    }
});


//Carroseis 




$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4, // Número de slides visíveis ao mesmo tempo
        slidesToScroll: 1, // Número de slides a rolar por vez
        autoplay: true, // Ativar autoplay
        autoplaySpeed: 500, // Velocidade do autoplay em milissegundos
    });
});







//progress bars

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#competencias");
    const progressBars = document.querySelectorAll(".progress-bar");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const percent = bar.getAttribute("data-percent");
                    bar.style.width = percent + '%';
                });
            } else {
                // Reset progress bars when the section is not visible
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(section);
});


//NAVBAR interativa

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentActiveLink = document.querySelector('.nav-link.active');
            if (currentActiveLink) {
                currentActiveLink.classList.remove('active');
            }
            const newActiveLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (newActiveLink) {
                newActiveLink.classList.add('active');
            }
        }
    });

  
   // Verifica se o scroll está dentro das seções específicas e ativa o link "Projetos" se estiver
const projetosSections = ['fotografia', 'fotografiaP','videos','videosP', 'sites'];
let isInSection = false;
projetosSections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            isInSection = true;
        }
    }
});

const projetosLink = document.getElementById('projetos-link');
if (projetosLink) {
    if (isInSection) {
        projetosLink.classList.add('active');
    } else {
        projetosLink.classList.remove('active');
    }
}
    
    // Controla a visibilidade da navbar
    if (scrollPosition > 0) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
});




/* RESPONSIVENESS */


const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});





/*recarregar pag voltar ao inicio 

window.addEventListener('load', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});*/



//scroll interativo

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});




//navbar so aparece depois a 1ºsection

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var inicioSection = document.getElementById('inicio');
    var inicioSectionHeight = inicioSection.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }
    });
});


//recarregar pag volta para section 1

window.onload = function() {
    var inicioSection = document.querySelector("#inicio");
    if (inicioSection) {
        // Rola instantaneamente para a seção de início
        window.scrollTo({
            top: inicioSection.offsetTop,
            behavior: "auto" // Rolagem instantânea
        });
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carouselSobre > *");
    let index = 0;
  
    setInterval(function() {
      items[index].classList.remove("active");
      index = (index + 1) % items.length;
      items[index].classList.add("active");
    }, 3000); // Muda a cada 3 segundos (3000 milissegundos)
  });
  
