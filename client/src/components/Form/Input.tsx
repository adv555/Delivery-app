import React from 'react'
import clsx from 'clsx'
import { overrideTailwindClasses } from 'tailwind-override'
import { Typography } from '../Typography'
import { InputProps } from './types/input-props.interface'

export const Input: React.FC<InputProps> = ({
  className,
  label,
  name,
  placeholder,
  isInvalid,
  error,
  type,

  ...restHTMLProps
}) => {
  return (
    <div className="TextInput w-full">
      {label && (
        <Typography type="Ag-13-medium" className={clsx('mb-0.5 ')}>
          {label}
        </Typography>
      )}
      <div className="InputContainer">
        <input
          className={overrideTailwindClasses(
            clsx(
              {
                'border-gray': !isInvalid,
                'border-red': isInvalid,
              },
              className,
            ),
          )}
          name={name}
          type={type}
          placeholder={placeholder}
          {...restHTMLProps}
        />
      </div>

      {isInvalid && error && <div className="TextInputErrorMsg">{error}</div>}
    </div>
  )
}
