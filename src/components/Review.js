import React from 'react'

function Review({stars, text}) {
  return (
    <div class="review">
      <h3>Rating: { stars } stars</h3>
      <p>{ text }</p>
    </div>
  )}

export default Review;
