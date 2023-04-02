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
  ViewButton,
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

  const handleAddToCart = (event, product) => {
    event.stopPropagation()
    addToCart(product)
    setCartCount(cartCount + 1)
  }

  return (
    <>
      <ProductListWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <CardImage src={product.imageUrl} />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
              <CardPrice>Price: ${product.price}</CardPrice>
              <AddToCartButton
                onClick={(event) => handleAddToCart(event, product)}
              >
                Add to Cart <FaShoppingCart />
              </AddToCartButton>
              <ViewButton onClick={() => handleProductClick(product)}>
                View
              </ViewButton>
            </CardBody>
          </Card>
        ))}
      </ProductListWrapper>
      <CartCount>Cart Count: {cartCount}</CartCount>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}

export default ProductList
