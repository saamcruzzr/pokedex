
// Carga DOM
{ document.addEventListener('DOMContentLoaded', () => {
    const idPokemon = numeroAleatorio(1,807);
    fetchAPI(idPokemon);
    console.log('nuevo pokemon ' + idPokemon)
    })
}

// Obtiene un número aleatorio
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Trae la API
const fetchAPI = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await respuesta.json()
        // console.log(data);
        tarjetas(data);
    } catch (error) {
        console.log(error);
    };

};

// Muestra Tarjeta pokemon
const tarjetas = (pokemon) => {
    console.log(pokemon)
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = `
    <p class="quienEs">¿Quién es ese Pokémon?</p>
    <div class="tarjeta">
        <h2 class="nombre">${pokemon.name.toUpperCase()}</h2>
        <img class="pokemon" src=${pokemon.sprites.other.home.front_default}>
        <p class="tipo">TIPO ${pokemon.types[0].type.name.toUpperCase()}</p>
        <p class="numId"># ${pokemon.id}</p>
    </div>
    <button class="btn">Mostrar Pokemón<img class="btn-ball" src="PokéBall_icon.svg"></button>
    `;
    actualiza()
};

// Actualiza tarjeta en intervalo de tiempo (30 segs)   
setInterval(()=> {
        const idPokemon = numeroAleatorio(1,807);
        fetchAPI(idPokemon);
        console.log(idPokemon);
    }, 30000);

// Actualiza tarjeta con botón 
const actualiza = () => {

    const botonActualizarTarjeta = document.querySelector('.btn');

    botonActualizarTarjeta.addEventListener('click',  () => {
        const idPokemon = numeroAleatorio(1,151);
        fetchAPI(idPokemon);
    });
};
