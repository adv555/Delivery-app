import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import TextInputField from './TextInputField'
import { Button } from '../Button'
import { PhoneInput } from './PhoneInput'
import { CartItem } from '../CartItem'
import { removeFromCart, updateQuantity } from '../../store/slices/cart.slice'
import { Typography } from '../Typography/Typography'

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

interface FormValuesProps {
  address: string
  email: string
  phone: string
  name: string
  total: number
}

const InitialValues: FormValuesProps = {
  address: '',
  email: '',
  phone: '',
  name: '',
  total: 0,
}

export const CheckOutForm: React.FC = () => {
  const onSubmit = (values: FormValuesProps) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={Yup.object({
        address: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().required('Required'),
        name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<FormValuesProps>) => {
        const { setFieldValue, errors, isValid, dirty } = props
        return (
          <Form className="flex flex-col items-center justify-center px-4 py-6  sm:px-0 sm:flex-row sm:items-start gap-6">
            <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
              <div className=" flex flex-col items-start  h-5/6 px-4 pt-6 border-4 border-dashed border-gray-200 gap-4">
                <img
                  className="block h-32 w-full object-fill"
                  src="https://picsum.photos/500/800"
                  alt=""
                />
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

            <div className="w-full max-h-screen sm:h-screen sm:w-1/2">
              <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200 flex flex-col justify-between">
                <div>
                  {data.map(item => (
                    <CartItem
                      key={item.name}
                      {...item}
                      onRemove={() => removeFromCart}
                      onQuantityChange={() => updateQuantity}
                    />
                  ))}
                </div>
                <div className="flex justify-center">
                  <Typography type={'h4'}>Total: 0.00 UAH</Typography>
                </div>

                <div className="flex justify-end mb-5">
                  <Button
                    label={'Submit'}
                    type="submit"
                    className="bg-orange-dark text-orange-light  hover:bg-orange-accent focus:outline-none focus:shadow-outline w-2/5 text-lg"

                    // disabled={!(isValid && dirty)}
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
