import React, { useEffect, useState } from "react";

interface WeatherInfoProps {
  description?: string;
  icon?: string;
  temperature?: number;
  pressure?: number;
  feels_like?: number;
  humidity?: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  description,
  icon,
  temperature,
  pressure,
  feels_like,
  humidity,
}) => {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    if (icon) {
      fetchIcon(icon);
    }
  }, [icon]);

  function hPaToMM(value?: number): number {
    return value ? Math.floor(value / 1.333) : 0;
  }

  function ucFirst(str?: string) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  function fetchIcon(icon: string) {
    fetch(`https://openweathermap.org/img/wn/${icon}.png`)
      .then((response) => {
        if (response.ok) {
          setIconUrl(response.url);
        }
      })
      .catch((error) => {
        console.log("Error fetching icon:", error.message);
      });
  }

  return (
    <>
      {description && <li>{ucFirst(description)} </li>}
      {iconUrl && <img src={iconUrl} alt="Weather Icon" />}
      {temperature && <li>Температура: {temperature}°C</li>}
      {feels_like && <li>Ощущается как: {feels_like}°C</li>}
      {pressure && (
        <li>Атмосферное давление: {hPaToMM(pressure)} мм рт. ст.</li>
      )}
      {humidity && <li>Влажность: {humidity}%</li>}
    </>
  );
};

export default WeatherInfo;
