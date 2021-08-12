import React from "react";
// import "../PreviewCollection/PreviewCollection.scss";
// import "../components/CollectionItem";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { CollectionPreviewContainer, CollectionPreviewTitle,PreviemCollectionContainer } from "./PreviewCollectionStyles";

function ProductsItem(props) {
  // pasez array-ul items ca props
  const { title, items } = props;
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>
        <div>{title}</div>
      </CollectionPreviewTitle>
      <PreviemCollectionContainer>
        {/* parcurg array-ul cu map pentru a se afisa numele din fiecare produs si filtrez array-ul a i sa fie afisate primele 4 */}
        {items
          ? items
              .filter((item, id) => id < 4)
              .map((item) => {
                return (
                  <CollectionItem
                    name={item.name}
                    price={item.price}
                    currency={item.currency}
                    imageUrl={item.imageUrl}
                  />
                );
              })
          : null}
      </PreviemCollectionContainer>
    </CollectionPreviewContainer>
  );
}

export default ProductsItem;
