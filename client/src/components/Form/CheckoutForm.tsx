import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import TextInputField from './TextInputField'
import { Button } from '../Button'
import { PhoneInput } from './PhoneInput'
import { CartItem } from '../CartItem'
import { removeFromCart, updateQuantity } from '../../store/slices/cart.slice'
import { Typography } from '../Typography/Typography'
import { FormValuesProps } from './types/form-props.interface'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getCartErrorMessage,
  getCartProducts,
  getTotalPrice,
} from '../../store/selectors/cart.selectors'
import { getAllProducts } from '../../store/selectors/product.selectors'
import { GoogleMap } from '../Map'
import { orderCheckout } from '../../store/actions/cart.actions'

const InitialValues: FormValuesProps = {
  address: '',
  email: '',
  phone: '',
  name: '',
}

export const CheckOutForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(getAllProducts)
  const cartItems = useAppSelector(getCartProducts)
  const totalPrice = useAppSelector(getTotalPrice)
  const errorMessage = useAppSelector(getCartErrorMessage)

  console.log(cartItems.length)

  function onQuantityChange(e: React.FocusEvent<HTMLInputElement>, id: string) {
    const quantity = Number(e.target.value) || 0
    dispatch(updateQuantity({ id, quantity }))
  }

  const onSubmit = (values: FormValuesProps) => {
    const total = +totalPrice
    const items = []

    for (const item of Object.entries(cartItems)) {
      const [productId, quantity] = item
      const productName = products[productId].name
      const productImage = products[productId].image

      items.push({
        productId,
        productName,
        quantity,
        productImage,
      })
    }

    const order = { ...values, items, total }
    console.log(order)
    dispatch(orderCheckout(order))
  }

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={Yup.object({
        address: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().required('Required'),
        name: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<FormValuesProps>) => {
        const { setFieldValue, errors, isValid, dirty } = props
        return (
          <Form className="flex flex-col items-center justify-center px-4 py-6  sm:px-0 sm:flex-row sm:items-start gap-6">
            <div className="w-full sm:h-screen sm:w-1/2">
              <div className=" flex flex-col items-start  h-5/6 px-4 pt-6 border-4 border-dashed border-gray-200 gap-2">
                <div className="max-h-32 w-full sm:h-2/6 overflow-hidden ">
                  <GoogleMap />
                </div>
                <TextInputField
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="e.g. Odessa"
                />

                <TextInputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="e.g. jane@formik.com"
                />

                <PhoneInput
                  id="phone"
                  placeholder={''}
                  setFieldValue={setFieldValue}
                  error={errors.phone}
                />

                <TextInputField label="Name" name="name" type="text" placeholder="e.g. Jane" />
              </div>
            </div>

            <div className="w-full  sm:h-screen sm:w-1/2">
              <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200 flex flex-col justify-between">
                {Object.entries(cartItems).length > 0 ? (
                  <div>
                    {Object.entries(cartItems).map(([id, quantity]) => (
                      <div key={id}>
                        <CartItem
                          name={products[id].name}
                          quantity={quantity}
                          price={products[id].price}
                          image={products[id].image}
                          onRemove={() => dispatch(removeFromCart(id))}
                          onQuantityChange={e => onQuantityChange(e, id)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-1/2 flex items-center justify-center text-gray-300">
                    <Typography type={'h3'} className="" children={'Your cart is empty'} />
                  </div>
                )}

                <div className="flex justify-center text-text">
                  <Typography type={'h4'}>Total: {totalPrice} UAH</Typography>
                </div>

                <div className="flex justify-end mb-5">
                  <Button
                    label={'Submit'}
                    type="submit"
                    className="bg-orange-dark text-orange-light  hover:bg-orange-accent focus:outline-none focus:shadow-outline w-2/5 text-lg"
                    disabled={!(isValid && dirty)}
                  />
                </div>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
