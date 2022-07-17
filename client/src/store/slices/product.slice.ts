import { IProduct, ISeller } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

interface ProductsState {
  loading: boolean
  error: string
  products: { [id: string]: IProduct }
}

const initialState: ProductsState = {
  loading: false,
  error: '',
  products: {},
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetching: state => {
      state.loading = true
    },
    fetchingSuccess: (state, action) => {
      state.loading = false
      action.payload.forEach((product: WritableDraft<IProduct>) => {
        state.products[product._id] = product
      })
    },
    fetchingError: (state, action: PayloadAction<Error>) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default productsSlice.reducer
