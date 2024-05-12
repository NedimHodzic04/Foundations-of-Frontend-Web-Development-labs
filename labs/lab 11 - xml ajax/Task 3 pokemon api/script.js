function fetchPokemon() {
    var pokemonName = $('#pokemonName').val().toLowerCase();
    if (pokemonName.trim() === '') {
        alert("Please enter a Pokémon name.");
        return;
    }

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;


    $.ajax({
        url: apiUrl,
        dataType: 'json',
        success: function(data) {
            displayPokemonDetails(data);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching Pokémon data:", error);
            displayErrorMessage("Failed to fetch Pokémon data. Please try again.");
        }
    });
}

function displayPokemonDetails(data) {
    var pokemonDetailsContainer = $('#pokemonDetails');
    var table = $('<table border="1">');
    var tableBody = $('<tbody>');


    tableBody.append(createTableRow('Name', data.name));
    tableBody.append(createTableRow('Height', data.height));
    tableBody.append(createTableRow('Weight', data.weight));
    tableBody.append(createTableRow('Type', data.types.map(type => type.type.name).join(', ')));

    var abilities = data.abilities.map(ability => ability.ability.name);
    tableBody.append(createTableRow('Abilities', abilities.join(', ')));

    $.each(data.stats, function(index, stat) {
        tableBody.append(createTableRow(stat.stat.name, stat.base_stat));
    });

    table.append(tableBody);
    pokemonDetailsContainer.empty().append(table);
}

function createTableRow(key, value) {
    return $('<tr>').append($('<td>').text(key)).append($('<td>').text(value));
}

function displayErrorMessage(message) {
    var pokemonDetailsContainer = $('#pokemonDetails');
    pokemonDetailsContainer.empty().text(message);
}
