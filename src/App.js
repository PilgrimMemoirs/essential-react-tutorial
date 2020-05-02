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
      />
    </div>
  );
}

export default App;
