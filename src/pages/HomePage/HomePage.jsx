// aceasta componenta va fi de tipul class deaorece vreau sa preiau doua props-uri din JSON, deci va trebui facut un request asincron
// ->lifecycle methods
import React, { Component } from "react";
import products from "../../utils/products.json";
import "../HomePage/HomePage.scss";
import MenuItem from "../../components/MenuItem/MenuItem";
import "../../components/MenuList/MenuList.scss";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      // primul array reprezeinta datele despre produse
      categories: [],
      // al doilea array reprezinta datele cu privire la numele rutelor(categoriilor)
      categoryNames: [],
    };
  }
  // facem request catre back-end prentru preluarea de date o singura data cu metoda componentDidMount
  componentDidMount() {
    // iau valorile din obiectul products si le pun intr-un array
    const categories = Object.values(products);
    // iau cheile din obiectul products si le pun intr-un array
    const categoriesNames = Object.keys(products);
    // actualizez state-ul
    this.setState({ categories: categories });
    // actualizez categoriesNames
    this.setState({ categoriesNames: categoriesNames });
  }
  render() {
    // preiau din state datele despre categorii si se va mapa prin array cu metoda map() pentru afisare
    const { categories } = this.state;
    return (
      <div className="homepage">
        <div className="directory-menu">
          {/* datele despre categori se afla in state*/}
          {categories.map((category, index) => {
            return (
              <MenuItem
                title={category.title}
                imageUrl={category.imageUrl}
                size={category.size}
                key={index}
                // pasez numele rutei
                routeName={this.state.categoriesNames[index]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
