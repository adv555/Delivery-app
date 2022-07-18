import React from 'react'
import { SearchInput } from '../components/Form/SearchInput'

export const History: React.FC = () => {
  return (
    <div className="h-screen items-center justify-center px-4 py-6 sm:px-0">
      <div className="flex flex-col items-center justify-center h-2/6 overflow-scroll px-4  border-4 border-dashed border-gray-200 mb-4 gap-2">
        <SearchInput
          id={''}
          placeholder={''}
          label="Email"
          onBlur={e => console.log(e.target.value)}
        />

        <SearchInput
          id={''}
          placeholder={''}
          label="Phone"
          onBlur={e => console.log(e.target.value)}
        />
      </div>

      <div className="h-3/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
        Part 2
      </div>
    </div>
  )
}
