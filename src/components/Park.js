import React from 'react';
import Review from './Review'
import Trail from './Trail'


function Park({name, description}) {
  return (
    <section className="Park">
      <h1> I'm { name } </h1>
      <p>About: { description }</p>
    </section>
  );
}

export default Park;
