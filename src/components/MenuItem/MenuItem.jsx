// componenta simpla care primeste doua props-uri
import React from "react";
import { Link } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./MenuItemStyles";

function MenuItem(props) {
  const { title, imageUrl, size, routeName } = props;
  return (
    //   prin atributul style am interlopat dinamic imagnea de fundal pentru fiecare menu-item in parte
    <MenuItemContainer size={size}>
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        {/*aplic metoda toUpperCase pentru ca title s fie scris cu majuscule  */}
        <Link className="link" to={`/category/${routeName}`}>
          <TitleContainer>
            <div>{title.toUpperCase()}</div>
          </TitleContainer>
        </Link>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default MenuItem;
