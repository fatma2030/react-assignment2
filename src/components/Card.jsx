import React from "react";
import "./Card.css";

/**
 * Reusable Card component
 * Props:
 *  - title: string
 *  - description: string
 *  - image: string (optional) -> image URL
 *  - children: node (optional) -> extra nested content
 */
function Card({ title, description, image, children }) {
  return (
    <div className="card">
      {image && <img className="card-image" src={image} alt={title} />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-extra">{children}</div>}
      </div>
    </div>
  );
}

export default Card;
