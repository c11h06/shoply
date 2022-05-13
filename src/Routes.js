import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function Routes() {
  const { cart } = useSelector((store) => store, shallowEqual);
  const dispatch = useDispatch();

  function addItem(itemData) {
    dispatch(addToCart({ ...itemData }));
  }

  function removeItem(id) {
    dispatch(removeFromCart(id));
  }

  function isInCart(cartItem) {
    for (let item of cart) {
      if (item.name === cartItem.name) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/products/:id">
          <ItemDetails
            addItem={addItem}
            removeItem={removeItem}
            isInCart={isInCart}
          />
        </Route>
        <Route exact path="/">
          <ItemList
            addItem={addItem}
            removeItem={removeItem}
            isInCart={isInCart}
          />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
