import React from 'react';
import './App.css';
import Park from './components/Park'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Park
        name={data[0]["name"]}
        description={data[0]["description"]}
        reviews={data[0]["reviews"]}
      />
      <Park
        name={data[1]["name"]}
        description={data[1]["description"]}
        reviews={data[1]["reviews"]}
      />
    </div>
  );
}

export default App;
