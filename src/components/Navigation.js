import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext";

/* Time to do the same thing for our `Navigation` component.
  - First import the `useContext` hook and our `CartContext`
  - Next, pass our `CartContext` to the `useContext` hook and assign it to a variable named cart.
  - Lastly we need to remove all instances of `props`
    - Remove `props` from our parameters
    - Remove `props` from our cart length
     */

const Navigation = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
