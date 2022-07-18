import { IOder } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

interface OrdersState {
  loading: boolean
  error: string
  orders: { [id: string]: IOder }
}

const initialState: OrdersState = {
  loading: false,
  error: '',
  orders: {},
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    fetching: state => {
      state.loading = true
    },
    fetchingSuccess: (state, action) => {
      state.loading = false
      action.payload.forEach((order: WritableDraft<IOder>) => {
        state.orders[order._id] = order
      })
    },
    fetchingError: (state, action: PayloadAction<Error>) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default historySlice.reducer
