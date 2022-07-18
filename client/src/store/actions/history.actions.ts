import { AppDispatch } from '..'
import axios from '../../axios'
import { historySlice } from '../slices/history.slice'
import { productsSlice } from '../slices/product.slice'

export const searchOrdersByEmail = (email: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(historySlice.actions.fetching())
      const { data } = await axios.get(`orders/search/email?query=${email}`)
      console.log(data)
      dispatch(historySlice.actions.fetchingSuccess(data))
    } catch (e) {
      dispatch(historySlice.actions.fetchingError(e as Error))
    }
  }
}

export const searchOrdersByPhone = (phone: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(historySlice.actions.fetching())
      const { data } = await axios.get(`orders/search/phone?query=${phone}`)

      console.log(data)
      dispatch(historySlice.actions.fetchingSuccess(data))
    } catch (e) {
      dispatch(historySlice.actions.fetchingError(e as Error))
    }
  }
}
