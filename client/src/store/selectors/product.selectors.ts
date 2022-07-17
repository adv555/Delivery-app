import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getAllProducts = createSelector(
  (state: RootState) => state.products.products,
  products => products,
)
