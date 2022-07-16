import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { removeFromCart, updateQuantity } from '../store/slices/cart.slice'
import { CartItems } from '../components/CartItemTable'
import { CartItem } from '../components/CartItem'

export const Cart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6  sm:px-0 sm:flex-row sm:items-start gap-4">
      <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
        <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
          Part 1
        </div>
      </div>
      <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
        <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
          Part 2
          <CartItems />
          <CartItem
            name={'Kentucky fried chicken'}
            image={'https://picsum.photos/200'}
            price={0}
            quantity={0}
            onRemove={() => removeFromCart}
            onQuantityChange={() => updateQuantity}
          />
        </div>
      </div>
    </div>
  )
}
