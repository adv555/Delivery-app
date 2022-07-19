import React from 'react'
import { CartItem } from '../components/CartItem'
import { SearchInput } from '../components/Form/SearchInput'
import { HistoryCartItem } from '../components/historyCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { searchOrdersByEmail, searchOrdersByPhone } from '../store/actions/history.actions'
import { getOrdersHistory } from '../store/selectors/history.selectors'
import { resetSearch } from '../store/slices/history.slice'

export const History: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useAppSelector(getOrdersHistory)

  const onEmailSearch = (email: string) => {
    dispatch(resetSearch())
    dispatch(searchOrdersByEmail(email))
  }

  const onPhoneSearch = (phone: string) => {
    dispatch(resetSearch())
    dispatch(searchOrdersByPhone(phone))
  }

  return (
    <div className="h-screen items-center justify-center px-4 py-6 sm:px-0">
      <div className="flex flex-col items-center justify-center h-2/6 overflow-scroll px-4  border-4 border-dashed border-gray-200 mb-4 gap-2">
        <SearchInput
          id={''}
          placeholder={''}
          label="Email"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onEmailSearch(e.target.value.trim())
            }
          }}
        />

        <SearchInput
          id={''}
          placeholder={''}
          label="Phone"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onPhoneSearch(e.target.value.trim())
            }
          }}
        />
      </div>

      <div className="h-3/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
        <div className="flex flex-row flex-wrap basis-2/3">
          {Object.values(history).length > 0 ? (
            Object.values(history).map(order => (
              <div
                key={order._id}
                className="flex flex-wrap  w-full justify-between mb-2 border-b-2 py-2 border-b-slate-100"
              >
                <div className="flex items-center flex-wrap justify-start gap-2 w-3/4 ">
                  {order?.items.map(item => (
                    <div key={item._id} className="flex flex-wrap">
                      <HistoryCartItem
                        name={item.productName}
                        image={item.productImage}
                        quantity={item.quantity}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center font-bold w-1/4">
                  {order.total.toFixed(2)} UAH
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-48 mx-auto">
              <h2 className=" text-gray-400">No orders found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
