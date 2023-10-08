import React, { useEffect, useRef, useState } from "react";

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
  useRef(() => {});
  function hPaToMM(value: number): number {
    return Math.floor(value / 1.333);
  }

  function ucFirst(str: string) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  function fetchIcon(icon: string) {
    fetch(`https://openweathermap.org/img/wn/${icon}.png`)
      .then((response) => {
        if (response.ok) {
          setIconUrl(response.url);
          console.log(iconUrl);
        }
      })
      .catch((error) => {
        console.log("Error fetching icon:", error);
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
