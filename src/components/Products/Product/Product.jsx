import React from "react";

const Product = ({el}) => {
  // Note: this id should come from api
   console.log(el)
  const product = { id: 1 };
  return (
    <div data-cy={`product-${el.id}`}>

      <h3 data-cy="product-name">{el.name} hello</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
