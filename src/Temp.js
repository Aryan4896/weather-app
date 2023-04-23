import React, { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import Weather from "./Weather";

//https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=f486f797adb758fab0a2c677eeda42c9

const Temp = () => {
  const [searchvalue, setsearchvalue] = useState("Lucknow");
  const [tempinfo, settemp] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=f486f797adb758fab0a2c677eeda42c9`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newinfo = {
        temp,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,
        sunset
      };

      settemp(newinfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="container">
        <div className="search-handler row">
          <div className="d-flex col-md-8 col-10 mx-auto my-5">
            <input
              className="form-control me-2 searchterm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
              value={searchvalue}
              onChange={(input) => {
                setsearchvalue(input.target.value);
              }}
            />
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={getWeatherInfo}
            >
              Search
            </button>
          </div>
        </div>
        <Weather tempinfo={tempinfo} />
      </div>
    </>
  );
};

export default Temp;
