import React from 'react';
const weatherAPI = {
  key: `${process.env.WEATHER_APP_API_KEY}`,
  base: `${process.env.WEATHER_APP_AUTH_DOMAIN}`
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box"/>
          <input
            type="text"
            className="search-bar"
            placeholder='Search...'/>
      </main>
    </div>
  );
}

export default App;