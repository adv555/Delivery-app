import { ISeller } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SellersState {
  loading: boolean
  error: string
  sellers: ISeller[]
  activeSellerId: string | null
}

const initialState: SellersState = {
  loading: false,
  error: '',
  sellers: [],
  activeSellerId: null,
}

export const sellersSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    fetching: state => {
      state.loading = true
    },
    fetchingSuccess: (state, action: PayloadAction<ISeller[]>) => {
      state.loading = false
      state.sellers = action.payload
    },
    fetchingError: (state, action: PayloadAction<Error>) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default sellersSlice.reducer
