const key = '0f6a52546fd0478aa21193333242004';
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
loader.style.display = 'none';
error.style.display = 'none';

searchBtn.addEventListener('click', () => {
    getWeather(searchBar.value);
});

async function getWeather(query){
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`;
        loader.style.display = 'block';
        const res = await fetch(url);
        const data = await res.json();
        loader.style.display = 'none';
        setWeather(data);
    } catch (error) {
        error.style.display = 'block';
        console.log(error);
    }
}

function setWeather(data){
    temp.textContent = `${data.current.temp_f}°F`;
    city.textContent = data.location.name + ', ' + data.location.country;
    weather.textContent = data.current.condition.text;
}