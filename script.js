document.addEventListener("DOMContentLoaded", function() {
    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather-button");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    getWeatherButton.addEventListener("click", function() {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        }
    });

    function getWeather(city) {
        const apiKey = "abc1fd4c1eb4a8738d1092b9599ed691"; // Замените на свой API-ключ OpenWeatherMap.
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = `Погода в ${data.name}:`;
                temperature.textContent = `Температура: ${data.main.temp}°C`;
                description.textContent = `Описание: ${data.weather[0].description}`;
                weatherInfo.style.display = "block";
            })
            .catch(error => {
                cityName.textContent = "Город не найден";
                temperature.textContent = "";
                description.textContent = "";
                weatherInfo.style.display = "block";
            });
    }
});
