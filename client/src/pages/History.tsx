import React from 'react'

export const History: React.FC = () => {
  return (
    <div className="h-screen items-center justify-center px-4 py-6 sm:px-0">
      <div className="flex justify-center h-2/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200 mb-4">
        <div className=" w-1/3 border border-dashed">input</div>
      </div>

      <div className="h-3/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
        Part 2
      </div>
    </div>
  )
}
