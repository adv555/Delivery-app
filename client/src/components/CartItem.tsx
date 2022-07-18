import React from 'react'

interface CartItemProps {
  name: string
  image: string
  price?: number
  quantity: number
  disabled?: boolean
  onRemove?: () => void
  onQuantityChange?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const CartItem: React.FC<CartItemProps> = ({
  name,
  image,
  price,
  quantity,
  disabled = false,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex w-full rounded-2xl overflow-hidden shadow-card text-text-dark min-w-fit mb-3">
      <div className=" w-4/12 h-full border">
        <img className="block h-32 w-full object-fill" src={image} alt={name} />
      </div>
      <div className="flex flex-col w-4/12 p-2 justify-center items-center  ">
        <div className="flex items-center justify-center w-full mb-3 text-orange-dark">
          <h3>{name}</h3>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            className="text-xs w-2/3 border border-orange-dark h-6 rounded text-text-dark hover:border-orange-accent focus:outline-none focus:shadow-outline px-1 font-bold"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="100"
            defaultValue={quantity}
            onChange={onQuantityChange}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="flex w-3/12 items-center justify-center">{price && <p>{price} UAH</p>}</div>
      <div className="flex w-1/12 items-center justify-start">
        {onRemove && (
          <button
            aria-label={`Remove ${name}  from Shopping Cart`}
            onClick={onRemove}
            className=" font-bold text-lg "
          >
            X
          </button>
        )}
      </div>
    </div>
  )
}
