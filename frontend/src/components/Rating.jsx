import React from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    if (rating - i < 1) {
      stars.push(
        <span>
          <i className="fa fa-star-half-o" />
        </span>,
      );
    } else {
      stars.push(
        <span>
          <i className="fa fa-star" />
        </span>,
      );
    }
  }

  return (
    <div className="rating">
      {stars}
      <span className="reviews">{`${numReviews} reviews`}</span>
    </div>
  );
}
