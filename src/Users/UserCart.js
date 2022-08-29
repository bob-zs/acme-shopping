import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const UserCart = ({ auth, lineItems, logout, subtotal, increment, deleteLineItem }) => {
  const token = window.localStorage.getItem("token");
  const stripeSession = async () => {
    const noBodyNeeded = null;
    const headers = {
      headers: {
        authorization: token,
      },
    };
    const { data: url } = await axios.post(
      "/api/stripe",
      noBodyNeeded,
      headers
    );
    window.location.href = url;
  };

  return (
    <section className="main">
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
          {(lineItems || []).map((lineItem) => {
            let subtotal = lineItem.product.price * lineItem.quantity;
            return (
              <tr key={lineItem.id}>
                <td>
                  <img src={lineItem.product.imgUrl} width="120" height="80" />
                </td>
                <td>
                  <Link to={`products/${lineItem.product.id}`}>
                    {lineItem.product.name}
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => increment(lineItem, -1)}
                    disabled={lineItem.quantity === 1}
                  >
                    -
                  </button>
                  {lineItem.quantity}
                  <button onClick={() => increment(lineItem, +1)}>+</button>
                </td>
                <td>${lineItem.product.price}</td>
                <td>${subtotal && subtotal.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteLineItem(lineItem);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Subtotal: ${subtotal}</th>
            <th>
              {auth.isGuest ? (
                <button onClick={logout}>
                  Sign In to Checkout
                  {/* <Link to="/profile/edit/credentials">
                    Create Profile to Checkout
                  </Link> */}
                </button>
              ) : (
                <button onClick={stripeSession}>Continue to Checkout</button>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
const mapState = (state) => {
  const lineItems = state.cart.lineItems;
  const subtotalArr = (lineItems || []).map(
    (lineItem) => lineItem.product.price * 1 * lineItem.quantity
  );
  const calculateSum = () => {
    return subtotalArr.reduce((total, current) => {
      return total + current;
    }, 0);
  };

  //Sorts the Line Items
  (state.cart.lineItems || []).sort(function (a, b) {
    return a.id - b.id;
  });
  return {
    lineItems: state.cart.lineItems || [],
    subtotal: calculateSum().toFixed(2),
    auth: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    increment: (lineItem, dir) => {
      const item = { ...lineItem, quantity: lineItem.quantity + dir };
      dispatch(updateLineItem(item));
    },
    deleteLineItem: (lineItem) => {
      const item = { ...lineItem, quantity: 0 };
      dispatch(updateLineItem(item));
    },
    quickClearCart: () => dispatch({ type: "SET_CART", cart: { lineItems: [] }}),
    logout: () => {
      dispatch(logout());
    },
  };
};
export default connect(mapState, mapDispatch)(UserCart);
