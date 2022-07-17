import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInputField from './TextInputField'
import { Button } from '../Button'
import { PhoneInput } from './PhoneInput'

// And now we can use these
export const CheckOutForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-full mt-5">
      <Formik
        initialValues={{
          address: '',
          email: '',
          phone: '',
          name: '',
        }}
        validationSchema={Yup.object({
          address: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string().required('Required'),
          name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          <TextInputField label="Address" name="address" type="text" placeholder="e.g. Odessa" />

          <TextInputField
            label="Email"
            name="email"
            type="email"
            placeholder="e.g. jane@formik.com"
          />

          <PhoneInput id="phone" placeholder={''} />

          <TextInputField label="Name" name="name" type="text" placeholder="e.g. Jane" />

          <Button
            label={'Submit'}
            type="submit"
            className="bg-orange-dark text-orange-light  hover:bg-orange-accent focus:outline-none focus:shadow-outline w-52 mt-10"
            onClick={() => {
              alert('Submitted')
            }}
          />
        </Form>
      </Formik>
    </div>
  )
}
