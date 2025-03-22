document.addEventListener('DOMContentLoaded', function () {
    const bioSection = document.getElementById('bio');
    const statsSection = document.getElementById('stats');
    const titlesSection = document.getElementById('titles');
    const funFactsSection = document.getElementById('fun-facts');

    // Adicionar biografia
    bioSection.innerHTML = `
        <h2>Biografia</h2>
        <p>Neymar da Silva Santos Júnior, conhecido como Neymar Jr., nasceu em 5 de fevereiro de 1992 em Mogi das Cruzes, São Paulo, Brasil. Desde pequeno, mostrou um talento excepcional para o futebol, influenciado por seu pai, Neymar Sr., que também foi jogador. Aos 11 anos, Neymar se juntou às categorias de base do Santos Futebol Clube, onde estreou pelo time profissional em 2009, aos 17 anos. Sua habilidade, velocidade e visão de jogo rapidamente o tornaram a estrela do clube, levando-o a conquistar a Copa do Brasil em 2010 e a Copa Libertadores em 2011, sendo eleito o melhor jogador da América do Sul em 2011.</p>
        <img src="imagens/neymar_bio.jpg" alt="Neymar jogando futebol" class="image"> <!-- Imagem de biografia -->
    `;

    // Adicionar estatísticas
    statsSection.innerHTML = `
        <h2>Estatísticas de Carreira</h2>
        <ul>
            <li>Santos (2009-2013): 
                Jogos: 225
                Gols: 136
                Títulos: 10 (incluindo Copa do Brasil e Copa Libertadores)</li>
            <li>FC Barcelona (2013-2017): 
                Jogos: 186
                Gols: 105
                Assistências: 76
                Títulos: 10 (incluindo UEFA Champions League e La Liga)</li>
            <li>Paris Saint-Germain (2017-presente): 
                Jogos: 173 (até 2023)
                Gols: 118 (até 2023)
                Assistências: 77 (até 2023)
                Títulos: 13 (incluindo Ligue 1 e Copas nacionais)</li>
            <li>Seleção Brasileira: 
                Jogos: 125 (até 2023)
                Gols: 79 (até 2023)
                Títulos: 3 (incluindo Copa América e medalha de ouro olímpica)</li>
            <li>Marcas Notáveis: 
                Neymar é o terceiro maior artilheiro da Seleção Brasileira, atrás de Pelé e Ronaldo.
                Ele foi eleito o melhor jogador da América do Sul em 2011 e recebeu várias indicações ao Ballon d'Or, incluindo estar entre os finalistas.</li>
        </ul>
        <img src="imagens/neymar_stats.gif" alt="GIF de estatísticas do Neymar" class="image"> <!-- GIF de estatísticas -->
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
        <img src="imagens/neymar_titles.jpg" alt="Títulos de Neymar" class="image"> <!-- Imagem de títulos -->
    `;

    // Adicionar curiosidades
    funFactsSection.innerHTML = `
        <h2>Curiosidades sobre Neymar</h2>
        <ul>
            <li>Ele é o jogador brasileiro com mais gols na história das eliminatórias da Copa do Mundo.</li>
            <li>Neymar foi o responsável por criar o famoso "Neymar Dance", que ficou famoso em suas comemorações.</li>
            <li>Em 2020, Neymar foi eleito o melhor jogador do Campeonato Francês.</li>
        </ul>
        <img src="imagens/neymar_fun_facts.gif" alt="GIF divertido do Neymar" class="image"> <!-- GIF de curiosidades -->
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
