import { configureStore, combineReducers } from '@reduxjs/toolkit'
import sellersReducer from './slices/seller.slice'
import productReducer from './slices/product.slice'
import cartReducer from './slices/cart.slice'
import historyReducer from './slices/history.slice'

const rootReducer = combineReducers({
  sellers: sellersReducer,
  products: productReducer,
  cart: cartReducer,
  history: historyReducer,
})

export function setupStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
