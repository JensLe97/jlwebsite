import React from "react";
import Link from "next/link";

function Card(props) {
  return (
    <>
      <li className="card__li">
        <Link className="card__link" href={props.path}>
          <figure className="card__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="mountain" className="card__img" />
          </figure>
          <div className="card__info">
            <h5 className="card__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
