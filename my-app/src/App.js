import React from 'react';

const weatherAPI = {
  key: `${process.env.WEATHER_APP_API_KEY}`,
  base: `${process.env.WEATHER_APP_AUTH_DOMAIN}`
}

function App() {

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
