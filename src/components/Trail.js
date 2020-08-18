import React from 'react'
import Review from './Review'

function Trail({name, difficulty, reviews}) {
  return (
    <div className="Trail">
      <h2>I'm { name } trail!</h2>
      <p>Difficulty: { difficulty }</p>
      
      {reviews.map(review => (
        <Review stars={review.stars} text={review.text}/>
      ))}
    </div>
  );
}

export default Trail;
