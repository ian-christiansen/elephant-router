export async function getPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?type=dark');
  const data = await resp.json();
  return data;
}
