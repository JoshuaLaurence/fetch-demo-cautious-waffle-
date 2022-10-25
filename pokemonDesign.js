function designPokemonLayout(data) {
    //Sorting Data
    const pokemonTitle = data.forms[0].name
    const listOfAbilites = retrieveAbilities(data.abilities)
    const listOfGamesFeatured = retrieveListOfGames(data.games_indices)
    const listOfMoves = retrieveMoves(data.moves)
    const statistics = retrieveStatistics(data.stats)
    const types = retrieveTypes(data.types)
    const sprites = [data.sprites.back_default, data.sprites.front_default]

}

function retrieveTypes(types) {
    const tempArray = []
    for (let i = 0; i < types.length; i++) {
        tempArray.push(types[i].type.name)
    }
    return tempArray
}
function retrieveAbilities(abilities) {
    const tempArray = []
    for (let i = 0; i < abilities.length; i++) {
        tempArray.push(abilities[i].name)
    }
    return tempArray
}
function retrieveListOfGames(games) {
    const tempArray = []
    for (let i = 0; i < games.length; i++) {
        tempArray.push(games[i].version.name)
    }
    return tempArray
}
function retrieveMoves(moves) {
    const tempArray = []
    for (let i = 0; i < moves.length; i++) {
        tempArray.push(moves[i].move.name)
    }
    return tempArray
}
function retrieveStatistics(stats) {
    const tempArray = []
    for (let i = 0; i < stats.length; i++) {
        const statName = stats[i].stat.name
        tempArray.push({
            statName: stats[i].base_stat
        })
    }
    return tempArray
}

module.exports = designPokemonLayout
