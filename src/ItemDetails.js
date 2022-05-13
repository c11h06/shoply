import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { useParams, Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ItemDetails({ addItem, removeItem, isInCart }) {
  const { id } = useParams();
  const { items } = useSelector((store) => store, shallowEqual);
  const [itemShowing, setItemShowing] = useState({});

  useEffect(
    function () {
      for (let item of items) {
        if (item.id === id) {
          setItemShowing(item);
        }
      }
    },
    [itemShowing]
  );

  return (
    <div className="itemContainer">
      <div className="item">
        <Card>
          <CardBody>
            <CardTitle>{itemShowing.name}</CardTitle>
            <CardText>{itemShowing.description}</CardText>
            <p>
              <b>Price:</b> ${itemShowing.price}
            </p>
            <img src={itemShowing.image_url} alt=""></img>
            <button onClick={() => addItem(itemShowing)}>Add to cart</button>
            {isInCart(itemShowing) && (
              <button onClick={() => removeItem(itemShowing.id)}>
                Remove from cart
              </button>
            )}
          </CardBody>
        </Card>
      </div>
      <Link exact to="/">Go back</Link>
      <Cart />
    </div>
  );
}

export default ItemDetails;
