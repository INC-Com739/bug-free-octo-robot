// main.js
// Handles Pokémon search and displays results in a Bootstrap card

document.getElementById('search-btn').addEventListener('click', searchPokemon);

document.getElementById('pokemon-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchPokemon();
});

async function searchPokemon() {
    const query = document.getElementById('pokemon-input').value.trim().toLowerCase();
    const cardContainer = document.getElementById('pokemon-card-container');
    cardContainer.innerHTML = '';
    if (!query) return;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const data = response.data;
        const types = data.types.map(t => t.type.name).join(', ');
        const card = `
            <div class="card shadow" style="width: 22rem;">
                <img src="${data.sprites.other['official-artwork'].front_default}" class="card-img-top bg-white p-3" alt="${data.name}">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${data.name} <span class="text-muted">#${data.id}</span></h5>
                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item"><strong>Height:</strong> ${data.height}</li>
                        <li class="list-group-item"><strong>Weight:</strong> ${data.weight}</li>
                        <li class="list-group-item"><strong>Types:</strong> ${types}</li>
                    </ul>
                </div>
            </div>
        `;
        cardContainer.innerHTML = card;
    } catch (error) {
        cardContainer.innerHTML = `<div class="alert alert-danger">Pokémon not found. Please try another name or ID.</div>`;
    }
}
