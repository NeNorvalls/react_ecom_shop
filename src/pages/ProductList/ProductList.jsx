import { FaShoppingCart } from 'react-icons/fa'
import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import ProductDetail from '../ProductDetail/ProductDetail'
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  AddToCartButton,
  CartCount,
  ProductListWrapper,
} from './ProductList.styles'

function ProductList({ products }) {
  const { cart, addToCart } = useContext(CartContext)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartCount, setCartCount] = useState(cart.products.length)

  useEffect(() => {
    setCartCount(cart.products.length)
  }, [cart.products])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  return (
    <ProductListWrapper>
      {products.map((product) => (
        <Card key={product.id} onClick={() => handleProductClick(product)}>
          <CardImage src={product.imageUrl} />
          <CardBody>
            <CardTitle>{product.title}</CardTitle>
            <CardPrice>Price: ${product.price}</CardPrice>
            <AddToCartButton
              onClick={(event) => {
                event.stopPropagation()
                addToCart(product)
                setCartCount(cartCount + 1)
              }}
            >
              Add to Cart <FaShoppingCart />
            </AddToCartButton>
          </CardBody>
        </Card>
      ))}
      <CartCount>Cart Count: {cartCount}</CartCount>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </ProductListWrapper>
  )
}

export default ProductList
