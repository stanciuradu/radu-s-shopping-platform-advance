import React from "react";
import ProductItem from "./ProductItem";
import { ProductListStyles, ProductListRow } from "./ProductListStyles";
function ProductList(props) {
  const { products } = props;
  return (
    <ProductListStyles>
      <ProductListRow>
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
      </ProductListRow>
    </ProductListStyles>
  );
}

export default ProductList;
