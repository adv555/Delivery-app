import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckoutState = 'LOADING' | 'READY' | 'ERROR'
export type CartItems = { [productID: string]: number }

export interface CartState {
  cartItems: CartItems
  checkoutState: CheckoutState
  errorMessage: string
}

const initialState: CartState = {
  cartItems: {},
  checkoutState: 'READY',
  errorMessage: '',
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.cartItems[id] = state.cartItems[id] ? state.cartItems[id] + 1 : 1
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload
      delete state.cartItems[id]
    },
    clearCart: state => {
      state.cartItems = {}
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload
      state.cartItems[id] = quantity
    },
    setCheckoutState: (state, action: PayloadAction<CheckoutState>) => {
      state.checkoutState = action.payload
      state.errorMessage = ''
    },
    setErrorMessage: (state, action: PayloadAction<Error>) => {
      state.errorMessage = action.payload.message
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  setErrorMessage,
  setCheckoutState,
} = cartSlice.actions
export default cartSlice.reducer
