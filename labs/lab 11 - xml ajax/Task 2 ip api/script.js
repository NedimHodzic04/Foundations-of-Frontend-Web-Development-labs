$(document).ready(function() {
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

    function displayIPInfo(data) {
        var ipInfoContainer = $('#ipInfoContainer');
        var table = $('<table border="1">');
        var tableBody = $('<tbody>');

        $.each(data, function(key, value) {
            var row = $('<tr>');
            row.append($('<td>').text(key.replace(/_/g, ' '))); 
            row.append($('<td>').text(value));
            tableBody.append(row);
        });

        table.append(tableBody);
        ipInfoContainer.append(table);
    }
});
