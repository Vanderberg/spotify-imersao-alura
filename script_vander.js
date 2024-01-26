// Função para fazer a requisição à API
async function fetchArtists() {
    try {
        console.log('Iniciando requisição à API...');
        const response = await fetch('http://localhost:5103/api/artists?name=foo');
        console.log('Resposta da API recebida:', response);

        const data = await response.json();
        console.log('Dados JSON parseados:', data);

        // Função para exibir os artistas na página
        displayArtists(data.artists);
    } catch (error) {
        console.error('Erro ao buscar artistas:', error);
    }
}

// Função para exibir os artistas na página
function displayArtists(artists) {
    console.log('Exibindo artistas:', artists);

    const artistsList = document.getElementById('artistsList');

    artists.forEach(artist => {
        const listItem = document.createElement('li');
        listItem.textContent = `${artist.name} - ${artist.genre}`;
        artistsList.appendChild(listItem);
    });
}

// Chame a função para buscar os artistas ao carregar a página
fetchArtists();