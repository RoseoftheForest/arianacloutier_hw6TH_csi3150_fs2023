import React from "react";
import "./Travelblog.css";
import TravelCard from './Travelcard';
import TravelData from "../../Assets/TravelData";

const TravelList = () => {
    return (
      <div className="travel-list">
        {TravelData.map((place) => (
          <TravelCard key={place.id} place={place} />
        ))}
      </div>
    );
};



export default TravelList;