import styles from "./Weather.module.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherComponents/WeatherItem/WeatherItem";

interface WeatherDataType {
  description: string;
  icon: string;
  temperature: number;
  feels_like: number;
  pressure: number;
  humidity: number;
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataType>({
    description: "",
    icon: "",
    temperature: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
  });
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");
  const [isDataReceived, setIsDataReceived] = useState(false);

  function fetchWeather(cityName: string) {
    if (cityName.trim() === "") {
      setWeatherData({
        description: "",
        icon: "",
        temperature: 0,
        feels_like: 0,
        pressure: 0,
        humidity: 0,
      });
      return;
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&units=metric&appid=a550b16c8a205e5cb665d0eb30e208d5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка получения данных о погоде");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData({
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: Math.floor(data.main.temp),
          feels_like: Math.floor(data.main.feels_like),
          pressure: Math.floor(data.main.pressure),
          humidity: Math.floor(data.main.humidity),
        });
        setError("");
        clearInput();
        setIsDataReceived(true);
      })
      .catch((error) => {
        console.error(error);
        clearInput();
        setWeatherData({
          description: "",
          icon: "",
          temperature: 0,
          feels_like: 0,
          pressure: 0,
          humidity: 0,
        });
        setError("Ошибка получения данных о погоде");
        setIsDataReceived(false);
      });
  }

  function clearInput() {
    setCityName("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCityName(event.target.value);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      fetchWeather(cityName);
    }
  }
  return (
    <div className={styles.weather}>
      <h4 className={styles.weather_title}>Weather</h4>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="text"
          className={styles.weather_input}
          onInput={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={cityName}
        />
        <label className={styles.weather_inputLabel}>Введите город</label>
      </div>
      <button
        className={styles.weather_btn}
        onClick={() => fetchWeather(cityName)}
      >
        Получить погоду
      </button>
      <div className={styles.weatherContent}>
        {error ? (
          <p className={styles.weather_error}>{error}</p>
        ) : (
          <ul
            className={`${styles.weatherContent_list} ${
              isDataReceived ? styles.active : ""
            }`}
          >
            {weatherData.description !== null && (
              <WeatherInfo description={weatherData.description} />
            )}
            {weatherData.icon !== null && (
              <WeatherInfo icon={weatherData.icon} />
            )}
            {weatherData.temperature !== null && (
              <WeatherInfo temperature={weatherData.temperature} />
            )}
            {weatherData.feels_like !== null && (
              <WeatherInfo feels_like={weatherData.feels_like} />
            )}
            {weatherData.pressure !== null && (
              <WeatherInfo pressure={weatherData.pressure} />
            )}
            {weatherData.humidity !== null && (
              <WeatherInfo humidity={weatherData.humidity} />
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Weather;
