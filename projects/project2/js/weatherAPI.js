document.addEventListener('DOMContentLoaded', () => {
    const weatherAPIKey = 'd2164f371377a6b3f508d07388180fdd';
    const city = 'Sarajevo'; 
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`;

    fetch(weatherURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            return response.json();
        })
        .then(data => {
            const iconCode = data.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const weatherInfo = `
                <div id="weather-box">
                    <img src="${iconURL}" alt="Weather icon">
                    <h3>${data.name}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                </div>
            `;
            document.getElementById('weather-data').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather-error').textContent = 'Failed to fetch weather data: ' + error.message;
        });
});
