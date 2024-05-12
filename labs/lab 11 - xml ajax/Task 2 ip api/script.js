$(document).ready(function() {
    // Fetch IP address information
    $.ajax({
        url: 'https://ipapi.co/json/',
        dataType: 'json',
        success: function(data) {
            displayIPInfo(data);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching IP address information:", error);
        }
    });

    // Function to display IP address information in a table
    function displayIPInfo(data) {
        var ipInfoContainer = $('#ipInfoContainer');
        var table = $('<table border="1">');
        var tableBody = $('<tbody>');

        // Populate table with IP address information
        $.each(data, function(key, value) {
            var row = $('<tr>');
            row.append($('<td>').text(key.replace(/_/g, ' '))); // Replace underscores with spaces for display
            row.append($('<td>').text(value));
            tableBody.append(row);
        });

        table.append(tableBody);
        ipInfoContainer.append(table);
    }
});
