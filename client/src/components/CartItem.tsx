import React from 'react'

interface CartItemProps {
  name: string
  image: string
  price: number
  quantity: number
  onRemove: () => void
  onQuantityChange: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const CartItem: React.FC<CartItemProps> = ({
  name,
  image,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex w-full rounded-2xl overflow-hidden shadow-card text-text-dark min-w-fit">
      <div className=" w-4/12 h-full border">
        <img className="block h-32 w-full object-fill" src={image} alt={name} />
      </div>
      <div className="flex flex-col w-4/12 p-2 justify-center items-center  ">
        <div className="flex items-center justify-center w-full mb-3 text-orange-dark">
          <h3>{name}</h3>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            className="text-xs w-2/3 border"
            type="number"
            id="quantity"
            name="quantity"
            min="10"
            max="100"
            defaultValue={quantity}
            onBlur={e => onQuantityChange(e)}
          />
        </div>
      </div>
      <div className="flex w-3/12 items-center justify-center">
        <p>129.99 UAH</p>
      </div>
      <div className="flex w-1/12 items-center justify-start">
        <button onClick={onRemove} className=" font-bold text-lg ">
          X
        </button>
      </div>
    </div>
  )
}
