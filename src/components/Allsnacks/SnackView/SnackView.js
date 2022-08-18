import React from "react";
import { Link } from "react-router-dom";
import "./snackView.css";

export default function SnackView({
  photoUrl,
  title,
  description,
  price,
  snack,
}) {
  return (
    <Link to={`/allsnacks/${snack.id}`} className='noDecoration'>
      <div className='snackView'>
        <img
          src={photoUrl}
          className='snackview--image'
          style={{ height: "200px", width: "100%" }}
        />

        <div className='snackview--title'>
          {title.length > 23 ? title.slice(0, 23) + "..." : title}
        </div>
        <div className='snackview--description'>
          {description.length > 40
            ? description.slice(0, 75) + "..."
            : description}
        </div>
        <div className='snackview--price'>${price}</div>
      </div>
    </Link>
  );
}
