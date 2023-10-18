import React, { useState } from 'react';


const api = {
  key: `${process.env.WEATHER_APP_API_KEY}`,
  base: `${process.env.WEATHER_APP_AUTH_DOMAIN}`
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }
  }

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
              "Friday", "Saturday"];
  
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

  return (
    <div className="app sunny">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e => setQuery(e.target.value))}
            value={query}
            onKeyDown={search}
          />
        </div>
        <div className="location-box">
          <div className="location">London, UK</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">
            18°c
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;