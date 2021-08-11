import React from "react";
import ProductItem from "./ProductItem";
// import '../ProductList/ProductList.scss';
import { ProductListRow } from "./ProductListStyles";
function ProductList(props) {
  const { products } = props;
  return (
    <div className="product-list">
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
    </div>
  );
}

export default ProductList;
