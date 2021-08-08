// componenta simpla care primeste doua props-uri
import React from "react";
import "../MenuItem/MenuItem.scss";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const { title, imageUrl, size, routeName } = props;
  return (
    //   prin atributul style am interlopat dinamic imagnea de fundal pentru fiecare menu-item in parte
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        {/*aplic metoda toUpperCase pentru ca title s fie scris cu majuscule  */}
        <Link className='link' to={`/category/${routeName}`}>
          <h1 className="title">{title.toUpperCase()}</h1>
        </Link>

        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
