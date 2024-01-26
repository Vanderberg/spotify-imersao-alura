const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

async function requestApi(searchTerm) {
    try {
        console.log('Iniciando requisição à API...');
        const response = await fetch(`http://localhost:5103/api/artists?name=${searchTerm}`);

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
    resultPlaylist.classList.add("hidden")

    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    //const artistsList = document.getElementById('artistsList');


    // artists.forEach(artist => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = `${artist.name} - ${artist.genre}`;
    //     artistsList.appendChild(listItem);

    //     artistName.innerText = artist.name;
    //     artistImage.src = artist.urlImg;
    // });

    artists.forEach(item => {
        artistName.innerText = item.name;
        artistImage.src = item.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }

    requestApi(searchTerm);
})
