import React from 'react';

import './App.css';
import Loading from './containers/Loading';
import Weather from './containers/Weather';
import Cities from './containers/Cities';
import Sorting from './containers/Sorting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Please select a city that you are interested in
      </header>

      <main>
        <Cities />
        <Loading />
        <Weather />
        <Sorting />
      </main>
    </div>
  );
}

export default App;
