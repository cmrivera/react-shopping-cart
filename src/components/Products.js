import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  /*When we do this, `useContext` is going to return value passed by our `ProductContext` Provider `value` prop. In our case we're getting back an object with two properties. A `products` property and a `addItem` property. We can go ahead and destructure those. */

  const { products, addItem } = useContext(ProductContext);

  /*Now that we have all of the data we need we can refactor our `Products` component from using props.

- To do so we just need to remove every instance of `props`.

  - Remove it from the function parameters
  - Remove it from the products map
	- Remove it from addItem prop */

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};
//Now our `Products` component is getting it's data solely from `Context API`
export default Products;
