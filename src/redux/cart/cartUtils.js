// // fisier de utilitate pentru crearea proprietatii de cantitate pentru fiecare item->si pentru eliminarea duplicatelor
// // prin cadrul acestui fisier ne asigurm ca la fiecare produs selectat i se creste cantitatea cu 1, astfel incat produsele sa fie grupate

// // primul parametru reprezinta numarul total de produse din cart, al doilea reprezinta produsul pe care dorim sa-l adaugam in cart
// export function addProductToCart(cartProducts, cartProductToAdd) {
//   //-> ne uitam in cadrul produselor existemte din cart pentru a vedea daca produsul de adaugat exista deja in cart
//   const existingCartProduct = cartProducts.find(
//     (cartProduct) => cartProduct.id === cartProductToAdd.id
//   );
//   // ->daca aceasta conditie este adevarata avem:
//   if (existingCartProduct) {
//     return cartProducts.map((cartProduct) => {
//       return cartProduct.id === cartProductToAdd.id
//         ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
//         : cartProduct;
//     });
//   }
//   //   daca nu se gaseste produsul, atunci se returneaza un array in care la produsele din cart se adauga un obiect cu produsul adaugat si cantitatea 1
//   return [
//     ...cartProducts,
//     {
//       ...cartProductToAdd,
//       quantity: 1,
//     },
//   ];
// }
