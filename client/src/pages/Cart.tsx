import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { removeFromCart, updateQuantity } from '../store/slices/cart.slice'
import { CartItems } from '../components/CartItemTable'
import { CartItem } from '../components/CartItem'
import { CheckOutForm } from '../components/Form/CheckoutForm'

const data = [
  {
    name: 'Product 1',
    image: 'https://picsum.photos/200',
    price: 129.99,
    quantity: 1,
  },
  {
    name: 'Product 2',
    image: 'https://picsum.photos/200',
    price: 229.99,
    quantity: 2,
  },
]

export const Cart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6  sm:px-0 sm:flex-row sm:items-start gap-4">
      <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
        <div className=" flex flex-col items-start  h-5/6 px-4 pt-6 border-4 border-dashed border-gray-200">
          <img
            className="block h-32 w-full object-fill"
            src="https://picsum.photos/500/800"
            alt=""
          />
          <CheckOutForm />
        </div>
      </div>
      <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
        <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
          Part 2
          <CartItems />
          {data.map(item => (
            <CartItem
              key={item.name}
              {...item}
              onRemove={() => removeFromCart}
              onQuantityChange={() => updateQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

//  ;<CartItem
//    name={'Kentucky fried chicken'}
//    image={'https://picsum.photos/200'}
//    price={0}
//    quantity={0}
//    onRemove={() => removeFromCart}
//    onQuantityChange={() => updateQuantity}
//  />
