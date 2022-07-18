import { AppDispatch } from '..'
import axios from '../../axios'
import { productsSlice } from '../slices/product.slice'

export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.fetching())
      const { data } = await axios.get('products')
      dispatch(productsSlice.actions.fetchingSuccess(data))
    } catch (e) {
      dispatch(productsSlice.actions.fetchingError(e as Error))
    }
  }
}
