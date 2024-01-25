// Import CSS
import './WeatherInfo.css';
import React, { useState } from 'react';
import sunnyImage from './images/clear.png';
import rainyImage from './images/rain.png';
import cloudyImage from './images/cloud.png';
import unknownImage from './images/snow.png';

const weatherImages = {
  clear: sunnyImage,
  rain: rainyImage,
  clouds: cloudyImage,
  unknown: unknownImage,
};

const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const getWeather = () => {
    const apiKey = '3ac980513bf7c529632b853b2d4b0898';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, wind, weather, name } = data;
        const MT = Math.round(main.temp);
        const FL = Math.round(main.feels_like);

        const weatherConditionImage = weatherImages[weather[0].main.toLowerCase()] || unknownImage;

        const weatherData = {
          location: `Weather in ${name}`,
          temperature: `Temperature: ${MT} C`,
          feelsLike: `Feels Like: ${FL} C`,
          humidity: `Humidity: ${main.humidity} %`,
          wind: `Wind: ${wind.speed} km/h`,
          condition: `Weather Condition: ${weather[0].description}`,
          conditionImage: weatherConditionImage,
        };

        setWeatherInfo(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className='weather-container'
      style={{
        // Remove the backgroundImage style
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <input
        type='text'
        placeholder='Enter city name'
        value={city}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      />
      <button className='button-55' onClick={getWeather}>
        Get Weather
      </button>
      {weatherInfo && (
        <div className='weather-info'>
          <h3>{weatherInfo.location}</h3>
          {Object.values(weatherInfo).slice(1, -1).map((info, index) => (
            <p className='c' key={index}>
              {info}
            </p>
          ))}
        </div>
      )}
      <div className='img-container'>
        {weatherInfo && <img src={weatherInfo.conditionImage} alt='Weather Condition' />}
      </div>
    </div>
  );
};

export default WeatherInfo;
