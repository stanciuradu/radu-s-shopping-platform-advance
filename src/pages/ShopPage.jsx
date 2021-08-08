import React, { Component } from "react";
import products from "../utils/products.json";
import PreviewCollectionItem from "../pages/PreviewCollection/PreviewCollectionItem";

export class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      // array-ul pentru produse este gol initial pana ce datele vin de la back-end
      products: [],
    };
  }
  // fac request asincron pentru a prelua datele din json
  componentDidMount() {
    // iau valorile de la categorii si le pun in array pentru a le parcurge
    const newProducts = Object.values(products);
    // resetez state-ul
    this.setState({ products: newProducts });
  }
  render() {
    //   extrga din state produsele pentru a le mapa
    const { products } = this.state;
    return (
      <div className="shop-page">
        {products.map((product) => {
          return (
            <PreviewCollectionItem
              title={product.title.toUpperCase()}
              items={product.items}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
