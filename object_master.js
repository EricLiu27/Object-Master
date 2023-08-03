const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//EXAMPLES 
//list of pokemon that start with 'b' with filter (shorthand)
const bListPkmn = pokémon.filter(p => p.name[0] === "B");
//list of pokemon that start with 'b' with filter (lecture)
const bListPkmn2 = pokémon.filter((p) => {
    return p.name[0] === "B"
})
//list of pokemon ids (shorthand)
const pkmnIds = pokémon.map(p => p.id)
//list of pokemon ids (lecture)
const pkmnIds1 = pokémon.map((p) => {
    return p.id
})

// 1. 
const threeDivPokemon = pokémon.filter((p) => {
    return p.id % 3 === 0
})
console.log(threeDivPokemon)


//2. 
const firePokemon = pokémon.filter((p) => {
    return p.types[0] == 'fire' || p.types[1] == 'fire'
})
console.log(firePokemon)


//3.
const dualTypePokemon = pokémon.filter((p) => {
    return p.types.length === 2
})
console.log(dualTypePokemon)


//4. 
const namesPokemon = pokémon.map((p) => {
    return p.name
})
console.log(namesPokemon)


//5.
const namesPokemonGreater99 = pokémon
    .filter((p) => p.id > 99)
    .map((p) => p.name)
console.log(namesPokemonGreater99)


//6.
const namesPokemonPoison = pokémon
    .filter((p) => p.types[0] === 'poison' || p.types[1] === 'poison')
    .map((p) => p.name)
console.log(namesPokemonPoison)


//7.
const namesPokemonDualFlying = pokémon
    .filter((p) => p.types[1] === 'flying')
    .map((p) => p.types[0])
console.log(namesPokemonDualFlying)


//8.
let count = 1
const namesPokemonNormalCount = pokémon
    .filter((p) => p.types[0] === 'normal' || p.types[1] === 'normal')
    .map((p) => count++)
console.log(namesPokemonNormalCount)