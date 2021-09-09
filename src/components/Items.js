import React from "react";
import { useState } from "react";

const Items = ({ id, name, image, info, price, clicked }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tours">
      <img src={image} alt={name} className="image" />
      <footer>
        <div className="tours__title">
          <p>{name}</p>
          <p className="tours__price">${price}</p>
        </div>
        <p className="tours__info">
          {readMore ? info : info.substring(0, 200) + "..."}
          <button className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="tours__button" onClick={() => clicked(id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Items;
