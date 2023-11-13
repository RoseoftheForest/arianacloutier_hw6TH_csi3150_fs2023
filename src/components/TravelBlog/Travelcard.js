import React from 'react';
import "../../Assets/TravelData"; // tbh i just recycled old code a little bit here lol I use the same type of thing in assignment 4 i think
// still have not perfected it though honestly also hope it was ok to add extra js

const TravelCard = ({ place }) => {
  const { placeHeading, placeImg1, placeImg2, placeImg3, placeDescription } = place;

  return (
    <div className="travel-card"> 
      <h2>{placeHeading}</h2>
      <div className="image-container">
        <img src={placeImg1}  alt={`Image 1 for ${placeHeading}`} />
        <img src={placeImg2} alt={`Image 2 for ${placeHeading}`} />
        <img src={placeImg3} alt={`Image 3 for ${placeHeading}`} />
      </div>
      <p>{placeDescription}</p>
    </div>
  );
};

export default TravelCard;