import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'
import { getAllProducts } from './product.selectors'

export const getCartProducts = createSelector(
  (state: RootState) => state.cart.cartItems,
  cartItems => cartItems,
)

export const getActiveSeller = createSelector(
  getCartProducts,
  getAllProducts,
  (cartItems, products) => {
    if (Object.entries(cartItems).length === 0) return null
    const productIds = Object.keys(cartItems)
    const productId = productIds[0]
    const sellerId = products[productId].sellerId
    return sellerId
  },
)

export const getCartErrorMessage = createSelector(
  (state: RootState) => state.cart.errorMessage,
  errorMessage => errorMessage,
)

export const getMemorizedNumItems = createSelector(
  (state: RootState) => state.cart.cartItems,
  items => {
    let numItems = 0
    for (const id in items) {
      numItems += items[id]
    }
    return numItems
  },
)

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.cartItems,
  (state: RootState) => state.products.products,
  (cartItems, products) => {
    let total = 0
    for (const id in cartItems) {
      total += cartItems[id] * products[id].price
    }
    return total.toFixed(2)
  },
)
