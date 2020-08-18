import React from 'react';
import Park from './components/Park'
import './App.css';
import parkData from './data.json';

function App() {
  return (
    <div className="App">
      {parkData.map(park => (
        <Park
          name={park.name}
          trails={park.trails}
          reviews={park.reviews}
        />
      ))};
    </div>
  );
}

export default App;
