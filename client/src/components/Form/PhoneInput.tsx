import PhoneNumberInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { PhoneInputProps } from './types/input-props.interface'

export const PhoneInput = ({
  id,
  label = 'Phone',
  error,
  setFieldValue,
  ...inputProps
}: PhoneInputProps) => {
  return (
    <div className="TextInput w-full">
      <label htmlFor={id}>{label}</label>

      <div className="InputContainer">
        <PhoneNumberInput
          className="w-full"
          name={id}
          international
          initialValueFormat="national"
          defaultCountry="UA"
          onChange={(val: string) => {
            setFieldValue && setFieldValue(id, val || '', true)
          }}
          {...inputProps}
        />
      </div>
      {!!error && <div className="TextInputErrorMsg">{error}</div>}
    </div>
  )
}
