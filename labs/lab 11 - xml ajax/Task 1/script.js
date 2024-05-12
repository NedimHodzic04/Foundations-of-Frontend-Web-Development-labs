$(document).ready(function() {
    $.ajax({
        url: 'languages.json',
        dataType: 'json',
        success: function(data) {
            constructTable(data);
        },
        error: function(xhr, status, error) {
            console.error("Error loading JSON file:", error);
        }
    });

    function constructTable(data) {
        var tableContainer = $('#tableContainer');
        var table = $('<table border="1">');
        var tableHead = $('<thead>').append($('<tr>').append($('<th>').text('Code')).append($('<th>').text('Name')));
        var tableBody = $('<tbody>');

        
        $.each(data, function(index, language) {
            var row = $('<tr>');
            row.append($('<td>').text(language.code));
            row.append($('<td>').text(language.name));
            tableBody.append(row);
        });

        table.append(tableHead).append(tableBody);
        tableContainer.append(table);
    }
});
