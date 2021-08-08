import React from "react";
import "../PreviewCollection/PreviewCollection.scss";
// import "../components/CollectionItem";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

function ProductsItem(props) {
  // pasez array-ul items ca props
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
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
      </div>
    </div>
  );
}

export default ProductsItem;
