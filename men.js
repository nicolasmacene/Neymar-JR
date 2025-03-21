// men.js

document.addEventListener('DOMContentLoaded', function () {
    const bioSection = document.getElementById('bio');
    const statsSection = document.getElementById('stats');
    const titlesSection = document.getElementById('titles');
    const funFactsSection = document.getElementById('fun-facts');

    // Adicionar biografia
    bioSection.innerHTML = `
        <h2>Biografia</h2>
        <p>Neymar da Silva Santos Júnior, mais conhecido como Neymar Jr., nasceu em 5 de fevereiro de 1992 em Mogi das Cruzes, São Paulo. Desde muito jovem, Neymar se destacou no futebol, iniciando sua carreira nas divisões de base do Santos FC, onde ganhou destaque internacional.</p>
        <img src="neymar_bio.jpg" alt="Neymar jogando futebol" class="image">
    `;

    // Adicionar estatísticas
    statsSection.innerHTML = `
        <h2>Estatísticas de Carreira</h2>
        <ul>
            <li>Gols no PSG: 115</li>
            <li>Gols pela Seleção Brasileira: 80</li>
            <li>Total de Títulos: 25</li>
            <li>Transferência mais cara: 222 milhões de euros para o PSG</li>
        </ul>
    `;

    // Adicionar títulos
    titlesSection.innerHTML = `
        <h2>Títulos Importantes</h2>
        <ul>
            <li>Copa Libertadores (2011) - Santos</li>
            <li>Copa do Mundo Sub-20 (2011) - Seleção Brasileira</li>
            <li>Champions League (2015) - Barcelona</li>
            <li>Campeonato Francês (2018, 2019, 2020) - PSG</li>
            <li>Olimpíada (2016) - Seleção Brasileira</li>
        </ul>
    `;

    // Adicionar curiosidades
    funFactsSection.innerHTML = `
        <h2>Curiosidades sobre Neymar</h2>
        <ul>
            <li>Ele é o jogador brasileiro com mais gols na história das eliminatórias da Copa do Mundo.</li>
            <li>Neymar foi o responsável por criar o famoso "Neymar Dance", que ficou famoso em suas comemorações.</li>
            <li>Em 2020, Neymar foi eleito o melhor jogador do Campeonato Francês.</li>
        </ul>
    `;
});

// Função para alternar entre os temas claro e escuro
function changeTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

// Função para aumentar ou diminuir o tamanho da fonte
function changeFontSize(action) {
    const content = document.querySelectorAll('section');
    content.forEach((section) => {
        let currentSize = parseInt(window.getComputedStyle(section).fontSize);
        if (action === 'increase') {
            section.style.fontSize = (currentSize + 2) + 'px';
        } else if (action === 'decrease') {
            section.style.fontSize = (currentSize - 2) + 'px';
        }
    });
}
