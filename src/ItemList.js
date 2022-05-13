import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Card, CardBody, CardTitle } from "reactstrap";
// import { addToCart, removeFromCart } from "./actions";
import Cart from "./Cart";

function ItemList({ addItem, removeItem, isInCart }) {
  // const dispatch = useDispatch();
  const { items, cart } = useSelector((store) => store, shallowEqual);

  // function addItem(itemData) {
  //   dispatch(addToCart({ ...itemData }));
  // }

  // function removeItem(id) {
  //   dispatch(removeFromCart(id));
  // }

  // function isInCart(cartItem) {
  //   for (let item of cart) {
  //     if (item.name === cartItem.name) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  return (
    <div className="itemContainer">
      {items.map((item) => {
        return (
          <section className="items">
            <Card className="item">
              <CardBody>
                <CardTitle>
                  <Link exact to={`/products/${item.id}`}>
                    {item.name}
                  </Link>
                </CardTitle>
                <p>
                  <b>Price:</b> ${item.price}
                </p>
                <button onClick={() => addItem(item)}>Add to cart</button>
                {isInCart(item) && (
                  <button onClick={() => removeItem(item.id)}>
                    Remove from cart
                  </button>
                )}
              </CardBody>
            </Card>
          </section>
        );
      })}
      <Cart />
    </div>
  );
}

export default ItemList;
