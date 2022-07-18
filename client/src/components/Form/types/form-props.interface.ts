export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'number'
  name: string
  placeholder?: string
  disabled?: boolean
  isInvalid?: boolean
  error?: string
}

export type InputFieldProps = Omit<InputProps, 'isInvalid' | 'error'>

export type PhoneInputProps = {
  id: string
  placeholder: string
  label?: string
  value?: string
  error?: string | React.ReactNode
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
}

export type SearchInputProps = {
  id: string
  label?: string
  placeholder: string
  value?: string
  onKeyDown?: React.KeyboardEventHandler
  size?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export interface FormValuesProps {
  address: string
  email: string
  phone: string
  name: string
}
