import { IHistory } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

interface OrdersState {
  loading: boolean
  error: string
  orders: { [id: string]: IHistory }
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
      action.payload.forEach((order: WritableDraft<IHistory>) => {
        state.orders[order._id] = order
      })
    },
    fetchingError: (state, action: PayloadAction<Error>) => {
      state.loading = false
      state.error = action.payload.message
    },
    resetSearch: state => {
      state.orders = {}
    },
  },
})

export default historySlice.reducer
export const { resetSearch } = historySlice.actions
