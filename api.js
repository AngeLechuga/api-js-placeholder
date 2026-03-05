/* Variables */
//Seleccionar el formulario, el input y el contenedor donde se mostrará el Pokémon
const form = document.querySelector('.contenedor-texto_form');
const input = document.getElementById('inputPokemon');
const app = document.getElementById('app');

/* Función*/
async function getPokemon (name) {
    //Usar un bloque try-catch para manejar errores en la petición a la API
    try {
        //Mostrar carga 
        app.innerHTML = '<p class="carga">Cargando...</p>';
        //Nombre del pokemon en minúscula y sin espacios
        const nameClean = name.toLowerCase().trim();
        //Petición a la API
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${nameClean}`);
        //Si la respuesta no es ok, lanzar un error
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        // convertir la respuesta a JSON (await)
        const data = await response.json();

        //Mostrar el Pokémon
        showPokemon(data);
    } catch (error) {
        //Mostrar el error
        app.innerHTML = `<p class="error">400 / Error al obtener el Pokémon: ${error.message}</p>`;
    }
}

//Función para mostrar el Pokémon
function showPokemon(pokemon) {
    //Crear el HTML para mostrar el Pokémon
    const pokemonCard  = `
        <div class="pokemon-card">
            <h2>${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">

            <div class="pokemon-habilidades">
                <h3>Habilidades:</h3>
                <ul>
                    ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    //Mostrar el Pokémon en el contenedor
    app.innerHTML = pokemonCard;
}

//Evento submit del formulario
form.addEventListener('submit', (event) => {
    //Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    //Obtener el nombre del Pokémon ingresado por el usuario
    const pokemonName = input.value;
    //Si el nombre del Pokémon no está vacío, llamar a la función getPokemon, de lo contrario mostrar un mensaje de error
    if (pokemonName) {
        //Llamar a la función getPokemon con el nombre del Pokémon ingresado por el usuario
        getPokemon(pokemonName);
    } else {
        //Mostrar un mensaje de error si el campo de entrada está vacío
        app.innerHTML = '<p class="error">Por favor, ingresa el nombre de un Pokémon.</p>';
    }
});