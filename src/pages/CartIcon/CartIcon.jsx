import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartIcon() {
  const { cart } = useContext(CartContext)

  const productItems = cart.products.map((product) => (
    <li key={product.id}>
      {product.title} - ${product.price}
    </li>
  ))

  return (
    <div>
      <i className="fa fa-shopping-cart"></i>
      <Link to="/checkout">
        <ul>{productItems}</ul>
      </Link>
      <p>Number of items: {cart.products ? cart.products.length : 0}</p>
    </div>
  )
}

export default CartIcon
