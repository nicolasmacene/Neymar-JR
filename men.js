// men.js

document.addEventListener('DOMContentLoaded', function () {
    const bioSection = document.getElementById('bio');
    const statsSection = document.getElementById('stats');
    const titlesSection = document.getElementById('titles');
    const funFactsSection = document.getElementById('fun-facts');

    // Adicionar biografia
    bioSection.innerHTML = `
        <h2>Biografia</h2>
        <p>Neymar da Silva Santos Júnior, mais conhecido como Neymar Jr., nasceu em 5 de fevereiro de 1992, em Mogi das Cruzes, São Paulo, Brasil. Desde jovem, demonstrou grande talento para o futebol, e aos 17 anos já jogava no time profissional do Santos FC.</p>
        <p>Seu estilo de jogo é caracterizado pela velocidade, habilidade e dribles impressionantes. Neymar se tornou um dos jogadores mais caros da história do futebol, quando transferido para o Paris Saint-Germain (PSG) por uma quantia recorde em 2017.</p>
    `;

    // Adicionar estatísticas
    statsSection.innerHTML = `
        <h2>Estatísticas de Neymar</h2>
        <ul>
            <li>Gols marcados no PSG: 115</li>
            <li>Gols marcados pela Seleção Brasileira: 80</li>
            <li>Campeonatos conquistados: 25</li>
            <li>Transferências mais caras: 222 milhões de euros para o PSG</li>
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
            <li>Neymar tem um grande talento para o futsal, que ajudou a aprimorar suas habilidades no futebol.</li>
            <li>É o jogador brasileiro com mais gols na história das eliminatórias da Copa do Mundo.</li>
            <li>Em 2020, Neymar foi eleito o melhor jogador do Campeonato Francês.</li>
        </ul>
    `;
});
