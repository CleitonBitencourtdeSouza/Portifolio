// main.js
function showSection(sectionId, event) {
    event.preventDefault(); // Impede que a página role para a âncora

    // Esconde todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
        section.classList.remove('active'); // Remove a classe 'active' da seção 'home'
    });

    // Mostra apenas a seção correspondente ao link clicado
    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Usa display block para mostrar a seção
        if (sectionId === 'home') {
            activeSection.classList.add('active'); // Adiciona a classe 'active' somente para a seção 'home'
        }
    }
}