import { AppDispatch } from '..'
import axios from '../../axios'
import { cartSlice } from '../slices/cart.slice'

export const orderCheckout = (order: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cartSlice.actions.setCheckoutState('LOADING'))
      const { data } = await axios.post('orders', order)
      console.log(data)
      dispatch(cartSlice.actions.setCheckoutState('READY'))
      dispatch(cartSlice.actions.clearCart())
    } catch (e) {
      dispatch(cartSlice.actions.setCheckoutState('ERROR'))
      dispatch(cartSlice.actions.setErrorMessage(e as Error))
    }
  }
}
