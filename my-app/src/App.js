// import React from 'react';
// const weatherAPI = {
//   key: `${process.env.WEATHER_APP_API_KEY}`,
//   base: `${process.env.WEATHER_APP_AUTH_DOMAIN}`
// }

// function App() {
//   return (
//     <div className="app warm">
//       <main>
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder='Search...'/>
//           </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';

const weatherAPI = {
  key: `${process.env.WEATHER_APP_API_KEY}`,
  base: `${process.env.WEATHER_APP_AUTH_DOMAIN}`
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
