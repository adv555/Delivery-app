import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppRoute } from '../common/app/app-route.enum'
import { useAppSelector } from '../hooks/redux'
import { getMemorizedNumItems } from '../store/selectors/cart.selectors'
import { ShoppingCartIcon } from '@heroicons/react/outline'

interface CartLinkProps {
  type: 'link' | 'button'
}

export const CartLink: React.FC<CartLinkProps> = ({ type }) => {
  const navigate = useNavigate()
  const numItems = useAppSelector(getMemorizedNumItems)
  return (
    <>
      {type === 'link' && (
        <NavLink
          className="bg-orange-dark p-1 rounded-full text-orange-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-accent focus:ring-orange-accent focus:text-orange-accent hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-orange-accent hover:ring-orange-accent hover:text-orange-accent"
          to={AppRoute.CART}
        >
          <span className="sr-only">View cart</span>
          {numItems ? (
            <div className="flex px-2">
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              <span className=" inline-flex ml-1">{numItems}</span>
            </div>
          ) : (
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </NavLink>
      )}
      {type === 'button' && (
        <button
          type="button"
          className="ml-auto bg-gray-300 outline flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={() => navigate(AppRoute.CART, { replace: true })}
        >
          <span className="sr-only">View cart</span>
          {numItems ? (
            <div className="flex px-2">
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              <span className=" inline-flex ml-1">{numItems}</span>
            </div>
          ) : (
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      )}
    </>
  )
}
