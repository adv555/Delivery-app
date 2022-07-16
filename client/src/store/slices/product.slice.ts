import { IProduct, ISeller } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  loading: boolean
  error: string
  products: IProduct[]
}

const initialState: ProductsState = {
  loading: false,
  error: '',
  products: [],
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetching: state => {
      state.loading = true
    },
    fetchingSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false
      state.products = action.payload
    },
    fetchingError: (state, action: PayloadAction<Error>) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default productsSlice.reducer
