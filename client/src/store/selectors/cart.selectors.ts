import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getCartProducts = createSelector(
  (state: RootState) => state.cart.cartItems,
  cartItems => cartItems,
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
