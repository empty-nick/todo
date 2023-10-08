import styles from "./Weather.module.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherComponents/WeatherItem/WeatherItem";

const Weather = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<{
    description: string | null;
    icon: string | null;
    temperature: number | null;
    feels_like: number | null;
    pressure: number | null;
    humidity: number | null;
  }>({
    description: null,
    icon: null,
    temperature: null,
    feels_like: null,
    pressure: null,
    humidity: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [isDataReceived, setIsDataReceived] = useState(false);

  function fetchWeather(cityName: string) {
    if (cityName.trim() === "") {
      setWeatherData({
        description: null,
        icon: null,
        temperature: null,
        feels_like: null,
        pressure: null,
        humidity: null,
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
          temperature: toFloor(data.main.temp),
          feels_like: toFloor(data.main.feels_like),
          pressure: toFloor(data.main.pressure),
          humidity: toFloor(data.main.humidity),
        });
        setError(null);
        clearInput();
        setIsDataReceived(true);
      })
      .catch((error) => {
        console.error(error);
        clearInput();
        setWeatherData({
          description: null,
          icon: null,
          temperature: null,
          feels_like: null,
          pressure: null,
          humidity: null,
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

  function toFloor(value: number | null): number | null {
    return value !== null ? Math.floor(value) : null;
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
