// import {addProductToCart} from '../cart/cartUtils';
const initialState = {
  // initial, componenta dropDown este ascunsa, deci hidden are valorea true, iar la eventul de click pe iconita se va afisa componete de DropDown
  hidden: true,
  products:[]
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        // se copiaza state-ul initial la care se adauga valorea opusa lui hidden
        ...state,
        hidden: !state.hidden,
      };
      case "ADD_TO_CART":
        // preiau produsul din action.payload
        const product=action.payload;
        const newState={
          ...state,
          products:[
            ...state.products,
            product
          ]
        }
        return newState;
        case "REMOVE_FROM_CART":
        const newStateRemoveFromCart={
          ...state,
          products:[]
        }
        return newStateRemoveFromCart;
    default:
      return state;
  }
}

export default cartReducer;
