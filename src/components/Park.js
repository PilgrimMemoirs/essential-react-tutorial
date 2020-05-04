import React from 'react'
import Trail from './Trail'
import Review from './Review'

function Park() {
  return (
    <div className="Park">
      <h1>I'm a park!</h1>
      <Review />
      <Trail />
    </div>
  );
}

export default Park;
