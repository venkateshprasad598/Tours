import React from "react";
import Items from "./Items";

const Item = ({ tours, click }) => {
  return (
    <div className="tour">
      <h2>Our Tours</h2>
      <div className="tour__line"></div>

      {tours.map((tour) => {
        return <Items key={tour.id} {...tour} clicked={click} />;
      })}
    </div>
  );
};

export default Item;
