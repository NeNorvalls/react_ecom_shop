import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../../context/UseCart'
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
import { useState } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'

function ProductList({ products }) {
  const { cartCount, handleAddToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)

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
                handleAddToCart()
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
