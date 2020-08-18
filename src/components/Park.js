import React from 'react'
import Trail from './Trail'
import Review from './Review'

function Park({name, trails, reviews}) {
  return (
    <div className="Park">
      <h1>I'm { name } park!</h1>
      {reviews.map(review => (
        <Review stars={review.stars} text={review.text}/>
      ))}
      {trails.map(trail => (
        <Trail
          name={trail.name}
          difficulty={trail.difficulty}
          reviews={trail.reviews}
        />
      ))}
    </div>
  );
}

export default Park;
