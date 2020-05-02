import React from 'react';
import Review from './Review'
import Trail from './Trail'


function Park() {
  return (
    <div className="Park">
      <h1> I'm a Park! </h1>
      <Review />
      <Trail />
    </div>
  );
}

export default Park;
