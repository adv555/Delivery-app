import React from 'react'
import clsx from 'clsx'
import { ReactComponent as Glass } from '../../assets/icons/glass.svg'
import { SearchInputProps } from './types/form-props.interface'

export const SearchInput = ({
  id,
  label,
  size = 'sm:w-[336px]',
  ...inputProps
}: SearchInputProps) => {
  return (
    <div className="TextInput InputWithIcon ">
      <label htmlFor={id}>{label}</label>
      <div className={clsx('InputContainer relative', size)}>
        <div className="absolute right-4 top-4 w-[16px] h-[16px]">
          <Glass />
        </div>
        <input name={id} type={'text'} {...inputProps} />
      </div>
    </div>
  )
}
