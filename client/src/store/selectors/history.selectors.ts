import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getOrdersHistory = (state: RootState) => state.history.orders
