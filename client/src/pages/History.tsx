import React from 'react'
import { SearchInput } from '../components/Form/SearchInput'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { searchOrdersByEmail, searchOrdersByPhone } from '../store/actions/history.actions'
import { getOrdersHistory } from '../store/selectors/history.selectors'

export const History: React.FC = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector(getOrdersHistory)
  console.log(orders)
  const onEmailSearch = (email: string) => {
    console.log(email)
    dispatch(searchOrdersByEmail(email))
  }

  const onPhoneSearch = (phone: string) => {
    console.log(phone)
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
        Part 2
      </div>
    </div>
  )
}
