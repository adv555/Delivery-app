import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

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

// export const getTotalPrice = createSelector(
//   (state: RootState) => state.cart.cartItems,
//   (state: RootState) => state.products.products,
//   (items, products) => {
//     let total = 0
//     for (const id in items) {
//       total += products[id].price * items[id]
//     }

//     return total.toFixed(2)
//   },
// )
