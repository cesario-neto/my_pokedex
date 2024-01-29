function pokedex() {
  const ImageEl = document.querySelector(".screenImg");
  const searchInputEl = document.querySelector("#searchInput");
  const pokemonName = document.querySelector(".pokemonName");
  const nextButton = document.querySelector("#next");
  const previusButton = document.querySelector("#previus");

  nextButton.addEventListener("click", (e) => {
    if (Number(searchInputEl.value) >= 1025) return;
    searchInputEl.value = Number(searchInputEl.value) + 1;
    setNewPokemon();
  });

  previusButton.addEventListener("click", (e) => {
    if (Number(searchInputEl.value) <= 1) return;
    searchInputEl.value = Number(searchInputEl.value) - 1;
    setNewPokemon();
  });

  searchInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      setNewPokemon();
    }
  });

  async function setNewPokemon() {
    const pokemon = await getPokemon(searchInputEl.value);
    spriteUrl = pokemon.sprites.front_default;
    ImageEl.src = spriteUrl;
    pokemonName.innerHTML = pokemon.name;
  }

  setNewPokemon();

  async function getPokemon(id) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const jsonData = await pokemon.json();
    return await jsonData;
  }
}

pokedex();
