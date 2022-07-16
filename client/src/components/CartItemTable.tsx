import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { removeFromCart, updateQuantity } from '../store/slices/cart.slice'
// import classNames from 'classnames'
// import { checkoutCart, getTotalPrice, removeFromCard, updateQuantity } from './cartSlice'
// import styles from './Cart.module.css'

export const CartItems: React.FC = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products.products)
  console.log(products)
  const items = useAppSelector(state => state.cart.cartItems)
  //   const totalPrice = useAppSelector(getTotalPrice)
  //   const checkoutState = useAppSelector(state => state.cart.checkoutState)
  //   const errorMessage = useAppSelector(state => state.cart.errorMessage)

  function onQuantityChange(e: React.FocusEvent<HTMLInputElement>, id: string) {
    const quantity = Number(e.target.value) || 0
    dispatch(updateQuantity({ id, quantity }))
  }
  function onCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // dispatch(checkoutCart())
  }

  //   const tableClasses = classNames(styles.table, {
  //     [styles.table]: true,
  //     [styles.checkoutError]: checkoutState === 'ERROR',
  //     [styles.checkoutLoading]: checkoutState === 'LOADING',
  //   })

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      {/* <table className={tableClasses}> */}
      <table className="">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr>
              {/* <td>{products[id].name}</td> */}
              <td>
                <input
                  type="text"
                  className="text-xs w-12"
                  //   defaultValue={quantity}
                  onBlur={e => onQuantityChange(e, id)}
                />
              </td>
              {/* <td>{products[id].price}</td> */}
              <td>
                <button
                  //   aria-label={`Remove ${products[id].name}  from Shopping Cart`}
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Football Cleats</td>
            <td>
              <input type="text" className="text-xs w-12" defaultValue={17} />
            </td>
            <td>$25.99</td>
            <td>
              <button aria-label="Remove Football Cleats from Shopping Cart">X</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            {/* <td className={styles.total}>${totalPrice}</td> */}
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={onCheckout}>
        {/* {checkoutState === 'ERROR' && errorMessage ? (
          <p className={styles.errorBox}>{errorMessage}</p>
        ) : null} */}
        <button className="p-4 text-2xl" type="submit">
          Checkout
        </button>
      </form>
    </main>
  )
}
