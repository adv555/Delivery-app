import React from 'react'

interface CartItemProps {
  name: string
  image: string
  quantity: number
}

export const HistoryCartItem: React.FC<CartItemProps> = ({ name, image, quantity }) => {
  return (
    <div className="flex w-full rounded-2xl overflow-hidden shadow text-text-dark">
      <div className="h-full border">
        <img className="block h-20 w-full object-fill" src={image} alt={name} />
      </div>
      <div className="flex flex-col w-1/2 p-2 justify-center items-center  ">
        <div className="flex items-center justify-center w-full  text-orange-dark">
          <h3>{name}</h3>
        </div>
        {/* <div className="flex items-center justify-center w-full">{quantity}</div> */}
      </div>
    </div>
  )
}
