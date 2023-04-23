import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Weather = ({ tempinfo }) => {
  const [weatherstate, setweatherstate] = useState(" ");
  const {
    temp,
    humidity,
    pressure,
    main,
    name,
    speed,
    country,
    sunset
  } = tempinfo;

  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setweatherstate(
            <Icon icon="solar:clouds-bold-duotone" width="200" height="300" />
          );
          break;
        case "Haze":
          setweatherstate(
            <Icon
              icon="fluent:weather-haze-24-filled"
              width="200"
              height="300"
            />
          );
          break;
        case "Thunderstorm":
          setweatherstate(
            <Icon icon="ion:thunderstorm-sharp" width="200" height="300" />
          );
          break;
        case "Sunny":
          setweatherstate(
            <Icon
              icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
              width="200"
              height="300"
            />
          );
          break;
        case "Mist":
          setweatherstate(
            <Icon icon="material-symbols:mist" width="200" height="300" />
          );
          break;
        default:
          setweatherstate(
            <Icon
              icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
              width="200"
              height="300"
            />
          );
          break;
      }
    }
  }, [main]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeconvertor = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="row">
        <div className="card text-center">
          <div className="card-header row">
            <figure>
              {/* <img src={web} alt="Error" style={{ height: "210px" }} /> */}
              {weatherstate}
            </figure>
          </div>
          <div className="card-body weather-info row">
            <div
              className="col-md-4"
              style={{ backgroundColor: "#474745", color: "white" }}
            >
              <div className="temprature">{temp}°</div>
            </div>

            <div className="col-md-8">
              <div className="weather-condition">{main}</div>
              <div className="place">
                {name},{country}
                <div className="date">{new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted description row last-column-section">
            <div className="col-md-3 col-3 last-column-section-first">
              <Icon icon="wi:sunset" color="#474745" width="40" height="70" />
              <p>
                Sunset Time
                <br />
                {timeconvertor}
              </p>
            </div>
            <div className="col-md-3 col-3 last-column-section-second">
              <Icon icon="wi:humidity" color="#474745" width="40" height="70" />
              <p>
                Humidity
                <br />
                {humidity}
              </p>
            </div>
            <div className="col-md-3 col-3 last-column-section-third">
              <Icon
                icon="carbon:pressure"
                color="#474745"
                width="40"
                height="70"
              />
              <p>
                Pressure
                <br />
                {pressure}
              </p>
            </div>
            <div className="col-md-3 col-3 last-column-section-fourth">
              <Icon icon="ph:wind" color="#474745" width="40" height="70" />
              <p>
                Wind speed <br />
                {speed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
