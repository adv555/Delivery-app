import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getAllProducts = createSelector(
  (state: RootState) => state.products.products,
  products => products,
)

export const getSellerId = createSelector(
  (state: RootState) => state.products.products,
  products => Object.keys(products).find(key => products[key].sellerId),
)

export const getAllSellers = createSelector(
  (state: RootState) => state.sellers,

  sellers => sellers,
)

export const getProductsState = createSelector(
  (state: RootState) => state.products,

  products => products,
)
