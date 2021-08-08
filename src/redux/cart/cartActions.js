// actiunile sunt simple functii care returneaza un obiect
export function toggleCartHidden(){
    return{
        type:"TOGGLE_CART_HIDDEN"
    }
}

// actiune pentru adaucarea produselor in cart
export function addToCart(product){
    return{
        type:"ADD_TO_CART",
        payload:product
    }
}

// actiunea pentru stergerea unui produs din cart
export function removeFromCart(product){
    return{
        type:"REMOVE_FROM_CART",
        payload:product
    }
}