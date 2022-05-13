import React from "react";
import { useSelector, shallowEqual } from "react-redux";


function Cart() {
  const { cart } = useSelector((store) => store, shallowEqual);
  // const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function totalCart(cart) {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total.toFixed(2);
  }

  function makeItemNumbersObj(cart) {
    let freqObj = {};
    for (let item of cart) {
      freqObj[item.name] = freqObj[item.name] + 1 || 1;
    }
    return freqObj;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {Object.entries(makeItemNumbersObj(cart)).map((item) => {
        return (
          <li>
            {item[0]} qty: {item[1]}
          </li>
        );
      })}
      <h4>Cart Total: ${totalCart(cart)}</h4>
    </div>
  );
}

export default Cart;


 // const [total, setTotal] = useState(0);
  // const [itemNumbers, setItemNumers] = useState([]);
  
  // useEffect(
  //   function () {
  //     function totalCart() {
  //       let total = 0;
  //       for (let item of cart) {
  //         total += item.price;
  //       }
  //       return total.toFixed(2);
  //     }
  //     function makeItemNumbersObj() {
  //       let freqObj = {};
  //       for (let item of cart) {
  //         freqObj[item.name] = freqObj[item.name] + 1 || 1;
  //       }
  //       return freqObj;
  //     }
  //     setTotal(totalCart());
  //     setItemNumers(Object.entries(makeItemNumbersObj()));
  //   },
  //   [cart]
  // );