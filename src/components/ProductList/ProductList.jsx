import React from "react";
import ProductItem from "./ProductItem";
import '../ProductList/ProductList.scss';
function ProductList(props) {
  const { products } = props;
  return (
    <div className="product-list">
      <div className="row">
        {products
          ? products.map((product, index) => {
              return (
                <ProductItem
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  currency={product.currency}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ProductList;
