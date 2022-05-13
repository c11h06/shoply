import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from "./data.json";

// let initialCart = JSON.parse(localStorage.getItem("cart")) || [];

let itemsArray=[]
for (let item in data.products) {
  itemsArray.push({ ...data.products[item], id: item });
}

const INITIAL_STATE = { items: itemsArray, cart: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // if (localStorage.getItem("cart")) {
      //   let cartData = JSON.parse(localStorage.getItem("cart"))
      //   cartData.push(action.payload);
      //   localStorage.clear();
      //   localStorage.setItem("cart", JSON.stringify(cartData));
      // } else {
      //   localStorage.setItem("cart", JSON.stringify([action.payload]));
      // }
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      let cart = state.cart.slice()
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === action.payload) {
          cart.splice(i, 1);
          break;
        }
      }
      return { ...state, cart };
      // return { ...state, cart: state.cart.filter(item => item.id!==action.payload) };

    default:
      return state;
  }
}

export default rootReducer;
