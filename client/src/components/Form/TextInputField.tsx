import React from 'react'
import { useField } from 'formik'
import { Input } from './Input'
import { InputFieldProps } from './types/form-props.interface'

const TextInputField: React.FC<InputFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Input
      {...field}
      {...rest}
      isInvalid={!!meta.error && !!meta.touched}
      error={String(meta.error)}
    />
  )
}

export default TextInputField
